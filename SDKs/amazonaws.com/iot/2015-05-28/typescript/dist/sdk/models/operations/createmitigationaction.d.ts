import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
 */
export declare class CreateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
    addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;
    enableIoTLoggingParams?: shared.EnableIoTLoggingParams;
    publishFindingToSnsParams?: shared.PublishFindingToSnsParams;
    replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;
    updateCACertificateParams?: shared.UpdateCACertificateParams;
    updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}
export declare class CreateMitigationActionRequestBody extends SpeakeasyBase {
    /**
     * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
     */
    actionParams: CreateMitigationActionRequestBodyActionParams;
    /**
     * The ARN of the IAM role that is used to apply the mitigation action.
     */
    roleArn: string;
    /**
     * Metadata that can be used to manage the mitigation action.
     */
    tags?: shared.Tag[];
}
export declare class CreateMitigationActionRequest extends SpeakeasyBase {
    requestBody: CreateMitigationActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).
     */
    actionName: string;
}
export declare class CreateMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMitigationActionResponse?: shared.CreateMitigationActionResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
 */
export declare class UpdateMitigationActionRequestBodyActionParams extends SpeakeasyBase {
    addThingsToThingGroupParams?: shared.AddThingsToThingGroupParams;
    enableIoTLoggingParams?: shared.EnableIoTLoggingParams;
    publishFindingToSnsParams?: shared.PublishFindingToSnsParams;
    replaceDefaultPolicyVersionParams?: shared.ReplaceDefaultPolicyVersionParams;
    updateCACertificateParams?: shared.UpdateCACertificateParams;
    updateDeviceCertificateParams?: shared.UpdateDeviceCertificateParams;
}
export declare class UpdateMitigationActionRequestBody extends SpeakeasyBase {
    /**
     * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
     */
    actionParams?: UpdateMitigationActionRequestBodyActionParams;
    /**
     * The ARN of the IAM role that is used to apply the mitigation action.
     */
    roleArn?: string;
}
export declare class UpdateMitigationActionRequest extends SpeakeasyBase {
    requestBody: UpdateMitigationActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The friendly name for the mitigation action. You cannot change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and recreate the mitigation action with the new name.
     */
    actionName: string;
}
export declare class UpdateMitigationActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateMitigationActionResponse?: shared.UpdateMitigationActionResponse;
}

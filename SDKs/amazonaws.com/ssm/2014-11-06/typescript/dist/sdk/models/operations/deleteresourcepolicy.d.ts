import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    AmazonSSMDeleteResourcePolicy = "AmazonSSM.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    deleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcePolicyResponse?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourcePolicyConflictException
     */
    resourcePolicyConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourcePolicyInvalidParameterException
     */
    resourcePolicyInvalidParameterException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRetentionPolicyXAmzTargetEnum {
    WorkMailServiceDeleteRetentionPolicy = "WorkMailService.DeleteRetentionPolicy"
}
export declare class DeleteRetentionPolicyRequest extends SpeakeasyBase {
    deleteRetentionPolicyRequest: shared.DeleteRetentionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRetentionPolicyXAmzTargetEnum;
}
export declare class DeleteRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRetentionPolicyResponse?: Record<string, any>;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

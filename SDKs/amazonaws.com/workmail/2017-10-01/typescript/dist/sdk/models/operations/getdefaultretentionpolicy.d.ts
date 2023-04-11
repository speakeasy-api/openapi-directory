import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDefaultRetentionPolicyXAmzTargetEnum {
    WorkMailServiceGetDefaultRetentionPolicy = "WorkMailService.GetDefaultRetentionPolicy"
}
export declare class GetDefaultRetentionPolicyRequest extends SpeakeasyBase {
    getDefaultRetentionPolicyRequest: shared.GetDefaultRetentionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDefaultRetentionPolicyXAmzTargetEnum;
}
export declare class GetDefaultRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDefaultRetentionPolicyResponse?: shared.GetDefaultRetentionPolicyResponse;
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

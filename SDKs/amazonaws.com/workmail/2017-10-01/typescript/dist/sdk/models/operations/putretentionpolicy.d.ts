import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRetentionPolicyXAmzTargetEnum {
    WorkMailServicePutRetentionPolicy = "WorkMailService.PutRetentionPolicy"
}
export declare class PutRetentionPolicyRequest extends SpeakeasyBase {
    putRetentionPolicyRequest: shared.PutRetentionPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRetentionPolicyXAmzTargetEnum;
}
export declare class PutRetentionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * Success
     */
    putRetentionPolicyResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

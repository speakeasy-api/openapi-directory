import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEngagementXAmzTargetEnum {
    SSMContactsDescribeEngagement = "SSMContacts.DescribeEngagement"
}
export declare class DescribeEngagementRequest extends SpeakeasyBase {
    describeEngagementRequest: shared.DescribeEngagementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEngagementXAmzTargetEnum;
}
export declare class DescribeEngagementResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DataEncryptionException
     */
    dataEncryptionException?: any;
    /**
     * Success
     */
    describeEngagementResult?: shared.DescribeEngagementResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * ValidationException
     */
    validationException?: any;
}

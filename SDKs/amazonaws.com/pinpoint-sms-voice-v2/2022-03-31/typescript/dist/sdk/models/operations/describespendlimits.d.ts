import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSpendLimitsXAmzTargetEnum {
    PinpointSMSVoiceV2DescribeSpendLimits = "PinpointSMSVoiceV2.DescribeSpendLimits"
}
export declare class DescribeSpendLimitsRequest extends SpeakeasyBase {
    describeSpendLimitsRequest: shared.DescribeSpendLimitsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSpendLimitsXAmzTargetEnum;
}
export declare class DescribeSpendLimitsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeSpendLimitsResult?: shared.DescribeSpendLimitsResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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

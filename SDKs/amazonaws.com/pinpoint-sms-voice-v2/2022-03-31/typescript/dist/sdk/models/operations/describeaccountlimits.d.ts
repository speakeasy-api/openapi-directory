import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountLimitsXAmzTargetEnum {
    PinpointSMSVoiceV2DescribeAccountLimits = "PinpointSMSVoiceV2.DescribeAccountLimits"
}
export declare class DescribeAccountLimitsRequest extends SpeakeasyBase {
    describeAccountLimitsRequest: shared.DescribeAccountLimitsRequest;
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
    xAmzTarget: DescribeAccountLimitsXAmzTargetEnum;
}
export declare class DescribeAccountLimitsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccountLimitsResult?: shared.DescribeAccountLimitsResult;
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

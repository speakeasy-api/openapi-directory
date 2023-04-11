import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLimitsXAmzTargetEnum {
    DynamoDB20120810DescribeLimits = "DynamoDB_20120810.DescribeLimits"
}
export declare class DescribeLimitsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLimitsXAmzTargetEnum;
}
export declare class DescribeLimitsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLimitsOutput?: shared.DescribeLimitsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

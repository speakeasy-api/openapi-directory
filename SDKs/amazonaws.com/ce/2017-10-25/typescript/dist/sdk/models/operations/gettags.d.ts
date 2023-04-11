import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTagsXAmzTargetEnum {
    AWSInsightsIndexServiceGetTags = "AWSInsightsIndexService.GetTags"
}
export declare class GetTagsRequest extends SpeakeasyBase {
    getTagsRequest: shared.GetTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTagsXAmzTargetEnum;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    /**
     * BillExpirationException
     */
    billExpirationException?: any;
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getTagsResponse?: shared.GetTagsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RequestChangedException
     */
    requestChangedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

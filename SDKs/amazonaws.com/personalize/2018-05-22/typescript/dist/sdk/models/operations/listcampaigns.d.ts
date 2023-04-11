import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCampaignsXAmzTargetEnum {
    AmazonPersonalizeListCampaigns = "AmazonPersonalize.ListCampaigns"
}
export declare class ListCampaignsRequest extends SpeakeasyBase {
    listCampaignsRequest: shared.ListCampaignsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCampaignsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListCampaignsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listCampaignsResponse?: shared.ListCampaignsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

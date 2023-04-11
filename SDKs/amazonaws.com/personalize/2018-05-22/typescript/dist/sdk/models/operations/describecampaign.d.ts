import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCampaignXAmzTargetEnum {
    AmazonPersonalizeDescribeCampaign = "AmazonPersonalize.DescribeCampaign"
}
export declare class DescribeCampaignRequest extends SpeakeasyBase {
    describeCampaignRequest: shared.DescribeCampaignRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCampaignXAmzTargetEnum;
}
export declare class DescribeCampaignResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCampaignResponse?: shared.DescribeCampaignResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

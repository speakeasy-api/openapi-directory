import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCampaignXAmzTargetEnum {
    AmazonPersonalizeUpdateCampaign = "AmazonPersonalize.UpdateCampaign"
}
export declare class UpdateCampaignRequest extends SpeakeasyBase {
    updateCampaignRequest: shared.UpdateCampaignRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCampaignXAmzTargetEnum;
}
export declare class UpdateCampaignResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCampaignResponse?: shared.UpdateCampaignResponse;
}

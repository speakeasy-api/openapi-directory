import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCampaignStateRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    id: string;
}
export declare class GetCampaignStateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getCampaignStateResponse?: shared.GetCampaignStateResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

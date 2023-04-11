import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptMatchXAmzTargetEnum {
    GameLiftAcceptMatch = "GameLift.AcceptMatch"
}
export declare class AcceptMatchRequest extends SpeakeasyBase {
    acceptMatchInput: shared.AcceptMatchInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptMatchXAmzTargetEnum;
}
export declare class AcceptMatchResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptMatchOutput?: Record<string, any>;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}

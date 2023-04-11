import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMatchBackfillXAmzTargetEnum {
    GameLiftStartMatchBackfill = "GameLift.StartMatchBackfill"
}
export declare class StartMatchBackfillRequest extends SpeakeasyBase {
    startMatchBackfillInput: shared.StartMatchBackfillInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMatchBackfillXAmzTargetEnum;
}
export declare class StartMatchBackfillResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startMatchBackfillOutput?: shared.StartMatchBackfillOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}

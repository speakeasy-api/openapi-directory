import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationSmbXAmzTargetEnum {
    FmrsServiceCreateLocationSmb = "FmrsService.CreateLocationSmb"
}
export declare class CreateLocationSmbRequest extends SpeakeasyBase {
    createLocationSmbRequest: shared.CreateLocationSmbRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationSmbXAmzTargetEnum;
}
export declare class CreateLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationSmbResponse?: shared.CreateLocationSmbResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

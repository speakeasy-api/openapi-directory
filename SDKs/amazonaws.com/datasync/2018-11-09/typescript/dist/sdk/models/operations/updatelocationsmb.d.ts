import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLocationSmbXAmzTargetEnum {
    FmrsServiceUpdateLocationSmb = "FmrsService.UpdateLocationSmb"
}
export declare class UpdateLocationSmbRequest extends SpeakeasyBase {
    updateLocationSmbRequest: shared.UpdateLocationSmbRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationSmbXAmzTargetEnum;
}
export declare class UpdateLocationSmbResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateLocationSmbResponse?: Record<string, any>;
}

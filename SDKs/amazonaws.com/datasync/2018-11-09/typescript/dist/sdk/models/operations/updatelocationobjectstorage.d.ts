import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLocationObjectStorageXAmzTargetEnum {
    FmrsServiceUpdateLocationObjectStorage = "FmrsService.UpdateLocationObjectStorage"
}
export declare class UpdateLocationObjectStorageRequest extends SpeakeasyBase {
    updateLocationObjectStorageRequest: shared.UpdateLocationObjectStorageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationObjectStorageXAmzTargetEnum;
}
export declare class UpdateLocationObjectStorageResponse extends SpeakeasyBase {
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
    updateLocationObjectStorageResponse?: Record<string, any>;
}

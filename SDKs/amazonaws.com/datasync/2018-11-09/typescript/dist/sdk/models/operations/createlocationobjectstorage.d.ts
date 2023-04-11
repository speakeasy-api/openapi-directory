import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationObjectStorageXAmzTargetEnum {
    FmrsServiceCreateLocationObjectStorage = "FmrsService.CreateLocationObjectStorage"
}
export declare class CreateLocationObjectStorageRequest extends SpeakeasyBase {
    createLocationObjectStorageRequest: shared.CreateLocationObjectStorageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationObjectStorageXAmzTargetEnum;
}
export declare class CreateLocationObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationObjectStorageResponse?: shared.CreateLocationObjectStorageResponse;
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

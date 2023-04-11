import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationEfsXAmzTargetEnum {
    FmrsServiceCreateLocationEfs = "FmrsService.CreateLocationEfs"
}
export declare class CreateLocationEfsRequest extends SpeakeasyBase {
    createLocationEfsRequest: shared.CreateLocationEfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationEfsXAmzTargetEnum;
}
export declare class CreateLocationEfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationEfsResponse?: shared.CreateLocationEfsResponse;
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

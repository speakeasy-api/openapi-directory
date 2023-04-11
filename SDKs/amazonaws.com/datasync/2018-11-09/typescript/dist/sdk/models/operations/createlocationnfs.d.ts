import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationNfsXAmzTargetEnum {
    FmrsServiceCreateLocationNfs = "FmrsService.CreateLocationNfs"
}
export declare class CreateLocationNfsRequest extends SpeakeasyBase {
    createLocationNfsRequest: shared.CreateLocationNfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationNfsXAmzTargetEnum;
}
export declare class CreateLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationNfsResponse?: shared.CreateLocationNfsResponse;
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

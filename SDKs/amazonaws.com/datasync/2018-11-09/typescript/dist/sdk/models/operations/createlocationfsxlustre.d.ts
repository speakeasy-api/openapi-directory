import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationFsxLustreXAmzTargetEnum {
    FmrsServiceCreateLocationFsxLustre = "FmrsService.CreateLocationFsxLustre"
}
export declare class CreateLocationFsxLustreRequest extends SpeakeasyBase {
    createLocationFsxLustreRequest: shared.CreateLocationFsxLustreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationFsxLustreXAmzTargetEnum;
}
export declare class CreateLocationFsxLustreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationFsxLustreResponse?: shared.CreateLocationFsxLustreResponse;
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

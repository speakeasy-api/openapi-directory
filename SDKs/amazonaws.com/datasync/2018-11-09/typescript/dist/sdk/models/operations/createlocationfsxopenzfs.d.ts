import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationFsxOpenZfsXAmzTargetEnum {
    FmrsServiceCreateLocationFsxOpenZfs = "FmrsService.CreateLocationFsxOpenZfs"
}
export declare class CreateLocationFsxOpenZfsRequest extends SpeakeasyBase {
    createLocationFsxOpenZfsRequest: shared.CreateLocationFsxOpenZfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationFsxOpenZfsXAmzTargetEnum;
}
export declare class CreateLocationFsxOpenZfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationFsxOpenZfsResponse?: shared.CreateLocationFsxOpenZfsResponse;
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

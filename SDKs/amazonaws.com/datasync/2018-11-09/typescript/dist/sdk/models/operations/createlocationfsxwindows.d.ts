import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationFsxWindowsXAmzTargetEnum {
    FmrsServiceCreateLocationFsxWindows = "FmrsService.CreateLocationFsxWindows"
}
export declare class CreateLocationFsxWindowsRequest extends SpeakeasyBase {
    createLocationFsxWindowsRequest: shared.CreateLocationFsxWindowsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationFsxWindowsXAmzTargetEnum;
}
export declare class CreateLocationFsxWindowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationFsxWindowsResponse?: shared.CreateLocationFsxWindowsResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationHdfsXAmzTargetEnum {
    FmrsServiceCreateLocationHdfs = "FmrsService.CreateLocationHdfs"
}
export declare class CreateLocationHdfsRequest extends SpeakeasyBase {
    createLocationHdfsRequest: shared.CreateLocationHdfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationHdfsXAmzTargetEnum;
}
export declare class CreateLocationHdfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationHdfsResponse?: shared.CreateLocationHdfsResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLocationHdfsXAmzTargetEnum {
    FmrsServiceUpdateLocationHdfs = "FmrsService.UpdateLocationHdfs"
}
export declare class UpdateLocationHdfsRequest extends SpeakeasyBase {
    updateLocationHdfsRequest: shared.UpdateLocationHdfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationHdfsXAmzTargetEnum;
}
export declare class UpdateLocationHdfsResponse extends SpeakeasyBase {
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
    updateLocationHdfsResponse?: Record<string, any>;
}

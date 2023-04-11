import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUploadXAmzTargetEnum {
    DeviceFarm20150623UpdateUpload = "DeviceFarm_20150623.UpdateUpload"
}
export declare class UpdateUploadRequest extends SpeakeasyBase {
    updateUploadRequest: shared.UpdateUploadRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUploadXAmzTargetEnum;
}
export declare class UpdateUploadResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    /**
     * Success
     */
    updateUploadResult?: shared.UpdateUploadResult;
}

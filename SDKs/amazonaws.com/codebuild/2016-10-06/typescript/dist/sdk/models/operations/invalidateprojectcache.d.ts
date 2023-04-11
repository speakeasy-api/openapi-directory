import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InvalidateProjectCacheXAmzTargetEnum {
    CodeBuild20161006InvalidateProjectCache = "CodeBuild_20161006.InvalidateProjectCache"
}
export declare class InvalidateProjectCacheRequest extends SpeakeasyBase {
    invalidateProjectCacheInput: shared.InvalidateProjectCacheInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InvalidateProjectCacheXAmzTargetEnum;
}
export declare class InvalidateProjectCacheResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    invalidateProjectCacheOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

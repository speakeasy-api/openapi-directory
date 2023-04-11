import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListKeysXAmzTargetEnum {
    TrentServiceListKeys = "TrentService.ListKeys"
}
export declare class ListKeysRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listKeysRequest: shared.ListKeysRequest;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListKeysXAmzTargetEnum;
}
export declare class ListKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidMarkerException
     */
    invalidMarkerException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * Success
     */
    listKeysResponse?: shared.ListKeysResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

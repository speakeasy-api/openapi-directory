import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomKeyStoresXAmzTargetEnum {
    TrentServiceDescribeCustomKeyStores = "TrentService.DescribeCustomKeyStores"
}
export declare class DescribeCustomKeyStoresRequest extends SpeakeasyBase {
    describeCustomKeyStoresRequest: shared.DescribeCustomKeyStoresRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeCustomKeyStoresXAmzTargetEnum;
}
export declare class DescribeCustomKeyStoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomKeyStoreNotFoundException
     */
    customKeyStoreNotFoundException?: any;
    /**
     * Success
     */
    describeCustomKeyStoresResponse?: shared.DescribeCustomKeyStoresResponse;
    /**
     * InvalidMarkerException
     */
    invalidMarkerException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

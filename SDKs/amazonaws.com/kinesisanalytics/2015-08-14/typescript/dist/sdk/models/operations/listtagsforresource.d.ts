import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForResourceXAmzTargetEnum {
    KinesisAnalytics20150814ListTagsForResource = "KinesisAnalytics_20150814.ListTagsForResource"
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    listTagsForResourceRequest: shared.ListTagsForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

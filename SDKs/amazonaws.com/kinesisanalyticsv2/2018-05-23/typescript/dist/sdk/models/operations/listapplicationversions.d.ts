import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationVersionsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplicationVersions = "KinesisAnalytics_20180523.ListApplicationVersions"
}
export declare class ListApplicationVersionsRequest extends SpeakeasyBase {
    listApplicationVersionsRequest: shared.ListApplicationVersionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationVersionsXAmzTargetEnum;
}
export declare class ListApplicationVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listApplicationVersionsResponse?: shared.ListApplicationVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

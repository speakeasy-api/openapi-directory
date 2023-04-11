import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAppsXAmzTargetEnum {
    SageMakerListApps = "SageMaker.ListApps"
}
export declare class ListAppsRequest extends SpeakeasyBase {
    listAppsRequest: shared.ListAppsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppsXAmzTargetEnum;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAppsResponse?: shared.ListAppsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

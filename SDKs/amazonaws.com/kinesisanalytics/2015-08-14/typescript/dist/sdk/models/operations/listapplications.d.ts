import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationsXAmzTargetEnum {
    KinesisAnalytics20150814ListApplications = "KinesisAnalytics_20150814.ListApplications"
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    listApplicationsRequest: shared.ListApplicationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationsXAmzTargetEnum;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHubsXAmzTargetEnum {
    SageMakerListHubs = "SageMaker.ListHubs"
}
export declare class ListHubsRequest extends SpeakeasyBase {
    listHubsRequest: shared.ListHubsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHubsXAmzTargetEnum;
}
export declare class ListHubsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHubsResponse?: shared.ListHubsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

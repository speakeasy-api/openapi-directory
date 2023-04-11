import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHubContentsXAmzTargetEnum {
    SageMakerListHubContents = "SageMaker.ListHubContents"
}
export declare class ListHubContentsRequest extends SpeakeasyBase {
    listHubContentsRequest: shared.ListHubContentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHubContentsXAmzTargetEnum;
}
export declare class ListHubContentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHubContentsResponse?: shared.ListHubContentsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

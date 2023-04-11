import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHubContentVersionsXAmzTargetEnum {
    SageMakerListHubContentVersions = "SageMaker.ListHubContentVersions"
}
export declare class ListHubContentVersionsRequest extends SpeakeasyBase {
    listHubContentVersionsRequest: shared.ListHubContentVersionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHubContentVersionsXAmzTargetEnum;
}
export declare class ListHubContentVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHubContentVersionsResponse?: shared.ListHubContentVersionsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

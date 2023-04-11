import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListModelMetadataXAmzTargetEnum {
    SageMakerListModelMetadata = "SageMaker.ListModelMetadata"
}
export declare class ListModelMetadataRequest extends SpeakeasyBase {
    listModelMetadataRequest: shared.ListModelMetadataRequest;
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
    xAmzTarget: ListModelMetadataXAmzTargetEnum;
}
export declare class ListModelMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listModelMetadataResponse?: shared.ListModelMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

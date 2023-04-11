import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListArtifactsXAmzTargetEnum {
    SageMakerListArtifacts = "SageMaker.ListArtifacts"
}
export declare class ListArtifactsRequest extends SpeakeasyBase {
    listArtifactsRequest: shared.ListArtifactsRequest;
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
    xAmzTarget: ListArtifactsXAmzTargetEnum;
}
export declare class ListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listArtifactsResponse?: shared.ListArtifactsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

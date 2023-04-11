import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QueryLineageXAmzTargetEnum {
    SageMakerQueryLineage = "SageMaker.QueryLineage"
}
export declare class QueryLineageRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    queryLineageRequest: shared.QueryLineageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryLineageXAmzTargetEnum;
}
export declare class QueryLineageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    queryLineageResponse?: shared.QueryLineageResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

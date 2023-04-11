import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAliasesXAmzTargetEnum {
    SageMakerListAliases = "SageMaker.ListAliases"
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    listAliasesRequest: shared.ListAliasesRequest;
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
    xAmzTarget: ListAliasesXAmzTargetEnum;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAliasesResponse?: shared.ListAliasesResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

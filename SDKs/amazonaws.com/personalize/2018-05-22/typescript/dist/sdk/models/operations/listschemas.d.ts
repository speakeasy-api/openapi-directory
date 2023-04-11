import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSchemasXAmzTargetEnum {
    AmazonPersonalizeListSchemas = "AmazonPersonalize.ListSchemas"
}
export declare class ListSchemasRequest extends SpeakeasyBase {
    listSchemasRequest: shared.ListSchemasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSchemasXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListSchemasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listSchemasResponse?: shared.ListSchemasResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

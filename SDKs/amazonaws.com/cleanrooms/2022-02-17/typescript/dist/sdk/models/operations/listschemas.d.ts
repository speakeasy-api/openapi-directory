import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * If present, filter schemas by schema type. The only valid schema type is currently `TABLE`.
 */
export declare enum ListSchemasSchemaTypeEnum {
    Table = "TABLE"
}
export declare class ListSchemasRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the collaboration that the schema belongs to. Currently accepts a collaboration ID.
     */
    collaborationIdentifier: string;
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: number;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
    /**
     * If present, filter schemas by schema type. The only valid schema type is currently `TABLE`.
     */
    schemaType?: ListSchemasSchemaTypeEnum;
}
export declare class ListSchemasResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSchemasOutput?: shared.ListSchemasOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

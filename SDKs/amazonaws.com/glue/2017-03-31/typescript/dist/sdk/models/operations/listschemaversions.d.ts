import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSchemaVersionsXAmzTargetEnum {
    AWSGlueListSchemaVersions = "AWSGlue.ListSchemaVersions"
}
export declare class ListSchemaVersionsRequest extends SpeakeasyBase {
    listSchemaVersionsInput: shared.ListSchemaVersionsInput;
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
    xAmzTarget: ListSchemaVersionsXAmzTargetEnum;
}
export declare class ListSchemaVersionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listSchemaVersionsResponse?: shared.ListSchemaVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

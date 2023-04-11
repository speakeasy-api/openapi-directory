import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatabasesXAmzTargetEnum {
    AmazonAthenaListDatabases = "AmazonAthena.ListDatabases"
}
export declare class ListDatabasesRequest extends SpeakeasyBase {
    listDatabasesInput: shared.ListDatabasesInput;
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
    xAmzTarget: ListDatabasesXAmzTargetEnum;
}
export declare class ListDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDatabasesOutput?: shared.ListDatabasesOutput;
    /**
     * MetadataException
     */
    metadataException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

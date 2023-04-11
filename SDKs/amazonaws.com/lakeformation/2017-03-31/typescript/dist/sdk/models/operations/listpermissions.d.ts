import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
 */
export declare class ListPermissionsRequestBodyPrincipal extends SpeakeasyBase {
    dataLakePrincipalIdentifier?: string;
}
/**
 * A structure for the resource.
 */
export declare class ListPermissionsRequestBodyResource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: shared.DataCellsFilterResource;
    dataLocation?: shared.DataLocationResource;
    database?: shared.DatabaseResource;
    lfTag?: shared.LFTagKeyResource;
    lfTagPolicy?: shared.LFTagPolicyResource;
    table?: shared.TableResource;
    tableWithColumns?: shared.TableWithColumnsResource;
}
/**
 * Specifies a resource type to filter the permissions returned.
 */
export declare enum ListPermissionsRequestBodyResourceTypeEnum {
    Catalog = "CATALOG",
    Database = "DATABASE",
    Table = "TABLE",
    DataLocation = "DATA_LOCATION",
    LfTag = "LF_TAG",
    LfTagPolicy = "LF_TAG_POLICY",
    LfTagPolicyDatabase = "LF_TAG_POLICY_DATABASE",
    LfTagPolicyTable = "LF_TAG_POLICY_TABLE"
}
export declare class ListPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * Indicates that related permissions should be included in the results.
     */
    includeRelated?: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    nextToken?: string;
    /**
     * The Lake Formation principal. Supported principals are IAM users or IAM roles.
     */
    principal?: ListPermissionsRequestBodyPrincipal;
    /**
     * A structure for the resource.
     */
    resource?: ListPermissionsRequestBodyResource;
    /**
     * Specifies a resource type to filter the permissions returned.
     */
    resourceType?: ListPermissionsRequestBodyResourceTypeEnum;
}
export declare class ListPermissionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPermissionsResponse extends SpeakeasyBase {
    contentType: string;
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
    listPermissionsResponse?: shared.ListPermissionsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

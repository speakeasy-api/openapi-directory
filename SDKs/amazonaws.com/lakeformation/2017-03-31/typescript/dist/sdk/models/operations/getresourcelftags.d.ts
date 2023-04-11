import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure for the resource.
 */
export declare class GetResourceLFTagsRequestBodyResource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: shared.DataCellsFilterResource;
    dataLocation?: shared.DataLocationResource;
    database?: shared.DatabaseResource;
    lfTag?: shared.LFTagKeyResource;
    lfTagPolicy?: shared.LFTagPolicyResource;
    table?: shared.TableResource;
    tableWithColumns?: shared.TableWithColumnsResource;
}
export declare class GetResourceLFTagsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * A structure for the resource.
     */
    resource: GetResourceLFTagsRequestBodyResource;
    /**
     * Indicates whether to show the assigned LF-tags.
     */
    showAssignedLFTags?: boolean;
}
export declare class GetResourceLFTagsRequest extends SpeakeasyBase {
    requestBody: GetResourceLFTagsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetResourceLFTagsResponse extends SpeakeasyBase {
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
     * Success
     */
    getResourceLFTagsResponse?: shared.GetResourceLFTagsResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

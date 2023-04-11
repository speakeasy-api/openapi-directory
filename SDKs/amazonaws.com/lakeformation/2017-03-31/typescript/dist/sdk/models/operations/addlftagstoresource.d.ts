import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure for the resource.
 */
export declare class AddLFTagsToResourceRequestBodyResource extends SpeakeasyBase {
    catalog?: Record<string, any>;
    dataCellsFilter?: shared.DataCellsFilterResource;
    dataLocation?: shared.DataLocationResource;
    database?: shared.DatabaseResource;
    lfTag?: shared.LFTagKeyResource;
    lfTagPolicy?: shared.LFTagPolicyResource;
    table?: shared.TableResource;
    tableWithColumns?: shared.TableWithColumnsResource;
}
export declare class AddLFTagsToResourceRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * The LF-tags to attach to the resource.
     */
    lfTags: shared.LFTagPair[];
    /**
     * A structure for the resource.
     */
    resource: AddLFTagsToResourceRequestBodyResource;
}
export declare class AddLFTagsToResourceRequest extends SpeakeasyBase {
    requestBody: AddLFTagsToResourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddLFTagsToResourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    addLFTagsToResourceResponse?: shared.AddLFTagsToResourceResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
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
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSchemaExtensionsXAmzTargetEnum {
    DirectoryService20150416ListSchemaExtensions = "DirectoryService_20150416.ListSchemaExtensions"
}
export declare class ListSchemaExtensionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listSchemaExtensionsRequest: shared.ListSchemaExtensionsRequest;
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
    xAmzTarget: ListSchemaExtensionsXAmzTargetEnum;
}
export declare class ListSchemaExtensionsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listSchemaExtensionsResult?: shared.ListSchemaExtensionsResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

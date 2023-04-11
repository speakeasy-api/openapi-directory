import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCatalogItemsRequest extends SpeakeasyBase {
    /**
     * Filters the results by EC2 family (for example, M5).
     */
    ec2FamilyFilter?: string[];
    /**
     * Filters the results by item class.
     */
    itemClassFilter?: shared.CatalogItemClassEnum[];
    maxResults?: number;
    nextToken?: string;
    /**
     * Filters the results by storage option.
     */
    supportedStorageFilter?: shared.SupportedStorageEnumEnum[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCatalogItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listCatalogItemsOutput?: shared.ListCatalogItemsOutput;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

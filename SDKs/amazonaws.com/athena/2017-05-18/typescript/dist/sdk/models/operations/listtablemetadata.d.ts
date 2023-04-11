import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTableMetadataXAmzTargetEnum {
    AmazonAthenaListTableMetadata = "AmazonAthena.ListTableMetadata"
}
export declare class ListTableMetadataRequest extends SpeakeasyBase {
    listTableMetadataInput: shared.ListTableMetadataInput;
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
    xAmzTarget: ListTableMetadataXAmzTargetEnum;
}
export declare class ListTableMetadataResponse extends SpeakeasyBase {
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
    listTableMetadataOutput?: shared.ListTableMetadataOutput;
    /**
     * MetadataException
     */
    metadataException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

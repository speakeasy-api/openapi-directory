import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTableMetadataXAmzTargetEnum {
    AmazonAthenaGetTableMetadata = "AmazonAthena.GetTableMetadata"
}
export declare class GetTableMetadataRequest extends SpeakeasyBase {
    getTableMetadataInput: shared.GetTableMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTableMetadataXAmzTargetEnum;
}
export declare class GetTableMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTableMetadataOutput?: shared.GetTableMetadataOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MetadataException
     */
    metadataException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

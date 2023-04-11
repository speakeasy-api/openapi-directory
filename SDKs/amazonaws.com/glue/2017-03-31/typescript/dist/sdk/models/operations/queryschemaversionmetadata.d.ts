import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QuerySchemaVersionMetadataXAmzTargetEnum {
    AWSGlueQuerySchemaVersionMetadata = "AWSGlue.QuerySchemaVersionMetadata"
}
export declare class QuerySchemaVersionMetadataRequest extends SpeakeasyBase {
    querySchemaVersionMetadataInput: shared.QuerySchemaVersionMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QuerySchemaVersionMetadataXAmzTargetEnum;
}
export declare class QuerySchemaVersionMetadataResponse extends SpeakeasyBase {
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
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    querySchemaVersionMetadataResponse?: shared.QuerySchemaVersionMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

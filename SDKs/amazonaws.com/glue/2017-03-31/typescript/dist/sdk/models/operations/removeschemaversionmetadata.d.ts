import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveSchemaVersionMetadataXAmzTargetEnum {
    AWSGlueRemoveSchemaVersionMetadata = "AWSGlue.RemoveSchemaVersionMetadata"
}
export declare class RemoveSchemaVersionMetadataRequest extends SpeakeasyBase {
    removeSchemaVersionMetadataInput: shared.RemoveSchemaVersionMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveSchemaVersionMetadataXAmzTargetEnum;
}
export declare class RemoveSchemaVersionMetadataResponse extends SpeakeasyBase {
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
    removeSchemaVersionMetadataResponse?: shared.RemoveSchemaVersionMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

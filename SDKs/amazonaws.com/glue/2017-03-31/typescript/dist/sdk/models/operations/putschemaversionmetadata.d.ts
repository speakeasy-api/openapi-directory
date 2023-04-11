import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutSchemaVersionMetadataXAmzTargetEnum {
    AWSGluePutSchemaVersionMetadata = "AWSGlue.PutSchemaVersionMetadata"
}
export declare class PutSchemaVersionMetadataRequest extends SpeakeasyBase {
    putSchemaVersionMetadataInput: shared.PutSchemaVersionMetadataInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSchemaVersionMetadataXAmzTargetEnum;
}
export declare class PutSchemaVersionMetadataResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
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
    putSchemaVersionMetadataResponse?: shared.PutSchemaVersionMetadataResponse;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

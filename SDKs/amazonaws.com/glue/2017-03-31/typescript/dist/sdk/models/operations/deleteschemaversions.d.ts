import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSchemaVersionsXAmzTargetEnum {
    AWSGlueDeleteSchemaVersions = "AWSGlue.DeleteSchemaVersions"
}
export declare class DeleteSchemaVersionsRequest extends SpeakeasyBase {
    deleteSchemaVersionsInput: shared.DeleteSchemaVersionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSchemaVersionsXAmzTargetEnum;
}
export declare class DeleteSchemaVersionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSchemaVersionsResponse?: shared.DeleteSchemaVersionsResponse;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSchemaVersionsDiffXAmzTargetEnum {
    AWSGlueGetSchemaVersionsDiff = "AWSGlue.GetSchemaVersionsDiff"
}
export declare class GetSchemaVersionsDiffRequest extends SpeakeasyBase {
    getSchemaVersionsDiffInput: shared.GetSchemaVersionsDiffInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSchemaVersionsDiffXAmzTargetEnum;
}
export declare class GetSchemaVersionsDiffResponse extends SpeakeasyBase {
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
    getSchemaVersionsDiffResponse?: shared.GetSchemaVersionsDiffResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

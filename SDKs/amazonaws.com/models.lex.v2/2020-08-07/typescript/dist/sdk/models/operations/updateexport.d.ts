import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateExportRequestBody extends SpeakeasyBase {
    /**
     * The new password to use to encrypt the export zip archive.
     */
    filePassword?: string;
}
export declare class UpdateExportRequest extends SpeakeasyBase {
    requestBody: UpdateExportRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier Amazon Lex assigned to the export.
     */
    exportId: string;
}
export declare class UpdateExportResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateExportResponse?: shared.UpdateExportResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

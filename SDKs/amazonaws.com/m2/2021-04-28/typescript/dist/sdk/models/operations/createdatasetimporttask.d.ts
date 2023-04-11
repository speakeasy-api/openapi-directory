import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.
 */
export declare class CreateDataSetImportTaskRequestBodyImportConfig extends SpeakeasyBase {
    dataSets?: shared.DataSetImportItem[];
    s3Location?: string;
}
export declare class CreateDataSetImportTaskRequestBody extends SpeakeasyBase {
    /**
     *  Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a data set import. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires.
     */
    clientToken?: string;
    /**
     * Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.
     */
    importConfig: CreateDataSetImportTaskRequestBodyImportConfig;
}
export declare class CreateDataSetImportTaskRequest extends SpeakeasyBase {
    requestBody: CreateDataSetImportTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the application for which you want to import data sets.
     */
    applicationId: string;
}
export declare class CreateDataSetImportTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createDataSetImportTaskResponse?: shared.CreateDataSetImportTaskResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

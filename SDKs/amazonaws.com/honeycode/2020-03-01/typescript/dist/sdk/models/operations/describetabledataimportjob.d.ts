import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeTableDataImportJobRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The ID of the job that was returned by the StartTableDataImportJob request.</p> <p> If a job with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    jobId: string;
    /**
     * <p>The ID of the table into which data was imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook into which data was imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class DescribeTableDataImportJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeTableDataImportJobResult?: shared.DescribeTableDataImportJobResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

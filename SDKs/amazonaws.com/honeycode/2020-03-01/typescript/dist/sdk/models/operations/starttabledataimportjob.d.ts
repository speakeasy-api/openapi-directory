import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT".
 */
export declare enum StartTableDataImportJobRequestBodyDataFormatEnum {
    DelimitedText = "DELIMITED_TEXT"
}
/**
 * An object that has details about the source of the data that was submitted for import.
 */
export declare class StartTableDataImportJobRequestBodyDataSource extends SpeakeasyBase {
    dataSourceConfig?: shared.ImportDataSourceConfig;
}
/**
 * An object that contains the options specified by the sumitter of the import request.
 */
export declare class StartTableDataImportJobRequestBodyImportOptions extends SpeakeasyBase {
    delimitedTextOptions?: shared.DelimitedTextImportOptions;
    destinationOptions?: shared.DestinationOptions;
}
export declare class StartTableDataImportJobRequestBody extends SpeakeasyBase {
    /**
     * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
     */
    clientRequestToken: string;
    /**
     *  The format of the data that is being imported. Currently the only option supported is "DELIMITED_TEXT".
     */
    dataFormat: StartTableDataImportJobRequestBodyDataFormatEnum;
    /**
     * An object that has details about the source of the data that was submitted for import.
     */
    dataSource: StartTableDataImportJobRequestBodyDataSource;
    /**
     * An object that contains the options specified by the sumitter of the import request.
     */
    importOptions: StartTableDataImportJobRequestBodyImportOptions;
}
export declare class StartTableDataImportJobRequest extends SpeakeasyBase {
    requestBody: StartTableDataImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The ID of the table where the rows are being imported.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook where the rows are being imported.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class StartTableDataImportJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startTableDataImportJobResult?: shared.StartTableDataImportJobResult;
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

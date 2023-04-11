import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpsertTableRowsRequestBody extends SpeakeasyBase {
    /**
     * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
     */
    clientRequestToken?: string;
    /**
     * <p> The list of rows to upsert in the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request, a filter expression to find the rows to update for that element and the cell values to set for each column in the upserted rows. You need to specify at least one item in this list. </p> <p> Note that if one of the filter formulas in the request fails to evaluate because of an error or one of the column ids in any of the rows does not exist in the table, then the request fails and no updates are made to the table. </p>
     */
    rowsToUpsert: shared.UpsertRowData[];
}
export declare class BatchUpsertTableRowsRequest extends SpeakeasyBase {
    requestBody: BatchUpsertTableRowsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The ID of the table where the rows are being upserted.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook where the rows are being upserted.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class BatchUpsertTableRowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchUpsertTableRowsResult?: shared.BatchUpsertTableRowsResult;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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

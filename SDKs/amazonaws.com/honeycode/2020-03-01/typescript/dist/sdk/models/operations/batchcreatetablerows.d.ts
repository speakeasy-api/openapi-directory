import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchCreateTableRowsRequestBody extends SpeakeasyBase {
    /**
     * <p> The request token for performing the batch create operation. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the operation again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
     */
    clientRequestToken?: string;
    /**
     * <p> The list of rows to create at the end of the table. Each item in this list needs to have a batch item id to uniquely identify the element in the request and the cells to create for that row. You need to specify at least one item in this list. </p> <p> Note that if one of the column ids in any of the rows in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
     */
    rowsToCreate: shared.CreateRowData[];
}
export declare class BatchCreateTableRowsRequest extends SpeakeasyBase {
    requestBody: BatchCreateTableRowsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The ID of the table where the new rows are being added.</p> <p> If a table with the specified ID could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook where the new rows are being added.</p> <p> If a workbook with the specified ID could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class BatchCreateTableRowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchCreateTableRowsResult?: shared.BatchCreateTableRowsResult;
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

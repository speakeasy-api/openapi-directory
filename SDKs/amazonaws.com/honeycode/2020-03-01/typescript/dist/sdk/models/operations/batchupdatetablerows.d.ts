import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpdateTableRowsRequestBody extends SpeakeasyBase {
    /**
     * <p> The request token for performing the update action. Request tokens help to identify duplicate requests. If a call times out or fails due to a transient error like a failed network connection, you can retry the call with the same request token. The service ensures that if the first call using that request token is successfully performed, the second call will not perform the action again. </p> <p> Note that request tokens are valid only for a few minutes. You cannot use request tokens to dedupe requests spanning hours or days. </p>
     */
    clientRequestToken?: string;
    /**
     * <p> The list of rows to update in the table. Each item in this list needs to contain the row id to update along with the map of column id to cell values for each column in that row that needs to be updated. You need to specify at least one row in this list, and for each row, you need to specify at least one column to update. </p> <p> Note that if one of the row or column ids in the request does not exist in the table, then the request fails and no updates are made to the table. </p>
     */
    rowsToUpdate: shared.UpdateRowData[];
}
export declare class BatchUpdateTableRowsRequest extends SpeakeasyBase {
    requestBody: BatchUpdateTableRowsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The ID of the table where the rows are being updated.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook where the rows are being updated.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class BatchUpdateTableRowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchUpdateTableRowsResult?: shared.BatchUpdateTableRowsResult;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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

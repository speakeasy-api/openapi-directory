import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOperationsForConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    /**
     * Object with given id was not found.
     */
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    /**
     * Successful operation
     */
    operationReadList?: shared.OperationReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

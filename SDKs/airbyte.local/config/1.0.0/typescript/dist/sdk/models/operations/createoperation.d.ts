import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOperationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    /**
     * Successful operation
     */
    operationRead?: shared.OperationRead;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExecuteSourceCheckConnectionResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    checkConnectionRead?: shared.CheckConnectionRead;
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

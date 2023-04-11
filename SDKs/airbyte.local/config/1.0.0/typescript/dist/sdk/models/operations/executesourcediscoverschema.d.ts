import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExecuteSourceDiscoverSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    /**
     * Successful operation
     */
    sourceDiscoverSchemaRead?: shared.SourceDiscoverSchemaRead;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

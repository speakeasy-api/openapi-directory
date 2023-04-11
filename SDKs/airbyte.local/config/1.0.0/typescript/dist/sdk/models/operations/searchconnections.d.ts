import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchConnectionsResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    connectionReadList?: shared.ConnectionReadList;
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

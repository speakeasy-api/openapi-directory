import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    /**
     * Successful operation
     */
    sourceReadList?: shared.SourceReadList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

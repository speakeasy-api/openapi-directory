import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    destinationReadList?: shared.DestinationReadList;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

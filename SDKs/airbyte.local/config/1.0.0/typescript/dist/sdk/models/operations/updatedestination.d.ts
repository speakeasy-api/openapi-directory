import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDestinationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    destinationRead?: shared.DestinationRead;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

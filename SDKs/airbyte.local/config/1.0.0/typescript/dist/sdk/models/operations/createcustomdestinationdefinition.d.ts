import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCustomDestinationDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    destinationDefinitionRead?: shared.DestinationDefinitionRead;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

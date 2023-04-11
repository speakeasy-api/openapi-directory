import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDestinationDefinitionSpecificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    destinationDefinitionSpecificationRead?: shared.DestinationDefinitionSpecificationRead;
    /**
     * Input failed validation
     */
    invalidInputExceptionInfo?: shared.InvalidInputExceptionInfo;
    /**
     * Object with given id was not found.
     */
    notFoundKnownExceptionInfo?: shared.NotFoundKnownExceptionInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

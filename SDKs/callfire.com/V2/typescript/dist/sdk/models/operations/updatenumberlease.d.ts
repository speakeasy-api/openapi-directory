import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNumberLeaseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateNumberLeaseRequest extends SpeakeasyBase {
    /**
     * A NumberLease object to update
     */
    numberLeaseInput?: shared.NumberLeaseInput;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384
     */
    number: string;
}
export declare class UpdateNumberLeaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

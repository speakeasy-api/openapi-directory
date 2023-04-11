import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNumberLeaseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetNumberLeaseRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384
     */
    number: string;
}
export declare class GetNumberLeaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    numberLease?: shared.NumberLease;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

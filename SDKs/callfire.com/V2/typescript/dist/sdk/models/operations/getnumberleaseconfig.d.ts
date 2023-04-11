import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNumberLeaseConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetNumberLeaseConfigRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A phone number in E.164 format (11-digit). Example: 12132000384
     */
    number: string;
}
export declare class GetNumberLeaseConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    numberConfig?: shared.NumberConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

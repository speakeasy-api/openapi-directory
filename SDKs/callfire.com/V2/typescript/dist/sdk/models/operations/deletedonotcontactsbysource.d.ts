import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDoNotContactsBySourceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDoNotContactsBySourceRequest extends SpeakeasyBase {
    /**
     * Source associated with Do Not Contact (DNC) entry.
     */
    source: string;
}
export declare class DeleteDoNotContactsBySourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

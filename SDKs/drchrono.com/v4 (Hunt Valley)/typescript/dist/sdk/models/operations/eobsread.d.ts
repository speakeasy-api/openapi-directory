import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EobsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class EobsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class EobsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    eobObject?: shared.EOBObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

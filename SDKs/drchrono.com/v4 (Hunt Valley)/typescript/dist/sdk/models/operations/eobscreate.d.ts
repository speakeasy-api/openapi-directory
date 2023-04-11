import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EobsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class EobsCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class EobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    eobObject?: shared.EOBObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

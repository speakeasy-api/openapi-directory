import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OfficesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class OfficesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class OfficesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    office?: shared.Office;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

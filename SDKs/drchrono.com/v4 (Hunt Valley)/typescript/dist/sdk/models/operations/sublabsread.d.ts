import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SublabsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class SublabsReadRequest extends SpeakeasyBase {
    id: number;
}
export declare class SublabsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labVendorLocation?: shared.LabVendorLocation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

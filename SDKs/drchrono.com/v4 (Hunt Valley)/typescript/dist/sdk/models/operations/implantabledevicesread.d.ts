import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImplantableDevicesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ImplantableDevicesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    muDate?: string;
    muDateRange?: string;
    patient?: number;
}
export declare class ImplantableDevicesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    implantableDevice?: shared.ImplantableDevice;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

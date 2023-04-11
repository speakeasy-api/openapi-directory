import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SublabsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    labVendorLocation?: shared.LabVendorLocation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

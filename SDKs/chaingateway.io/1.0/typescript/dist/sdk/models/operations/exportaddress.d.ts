import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    exportAddressRequest: shared.ExportAddressRequest;
}
export declare class ExportAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    exportAddress?: shared.ExportAddress;
}

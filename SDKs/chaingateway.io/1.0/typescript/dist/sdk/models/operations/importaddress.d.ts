import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportAddressRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    importAddressRequest: shared.ImportAddressRequest;
}
export declare class ImportAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    importAddress?: shared.ImportAddress;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const AirtravelMultilegServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class AirtravelMultilegResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

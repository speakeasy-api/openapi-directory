import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiNewFormRequest extends SpeakeasyBase {
    clientCreateApiModel: shared.ClientCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiNewForm200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

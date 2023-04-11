import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiNewJsonRequest extends SpeakeasyBase {
    clientCreateApiModel: shared.ClientCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiNewJSON200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiDeleteJsonRequest extends SpeakeasyBase {
    clientDeleteApiModel: shared.ClientDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiDeleteJSON200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

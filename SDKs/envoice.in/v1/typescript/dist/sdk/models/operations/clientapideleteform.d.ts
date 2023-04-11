import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClientApiDeleteFormRequest extends SpeakeasyBase {
    clientDeleteApiModel: shared.ClientDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiDeleteForm200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

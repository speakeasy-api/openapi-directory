import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiDeleteJsonRequest extends SpeakeasyBase {
    workTypeDeleteApiModel: shared.WorkTypeDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    workTypeApiDeleteJSON200TextJSONInt32Integer?: number;
}

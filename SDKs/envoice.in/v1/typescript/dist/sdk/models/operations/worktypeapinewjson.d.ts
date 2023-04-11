import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiNewJsonRequest extends SpeakeasyBase {
    workTypeCreateApiModel: shared.WorkTypeCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    workTypeApiNewJSON200TextJSONInt32Integer?: number;
}

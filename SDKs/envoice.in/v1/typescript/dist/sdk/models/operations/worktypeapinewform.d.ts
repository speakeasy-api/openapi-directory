import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiNewFormRequest extends SpeakeasyBase {
    workTypeCreateApiModel: shared.WorkTypeCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    workTypeApiNewForm200TextJSONInt32Integer?: number;
}

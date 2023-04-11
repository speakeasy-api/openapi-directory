import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiDeleteFormRequest extends SpeakeasyBase {
    workTypeDeleteApiModel: shared.WorkTypeDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    workTypeApiDeleteForm200TextJSONInt32Integer?: number;
}

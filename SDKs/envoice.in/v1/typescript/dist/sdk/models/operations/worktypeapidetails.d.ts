import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiDetailsRequest extends SpeakeasyBase {
    workTypeId: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeDetailsApiModel?: shared.WorkTypeDetailsApiModel;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MeGetMePlanResponse extends SpeakeasyBase {
    apiCoreDtoAccountingPlan?: shared.ApiCoreDtoAccountingPlan;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

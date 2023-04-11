import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActivateMandateRequest extends SpeakeasyBase {
    mandateUuid: string;
}
export declare class ActivateMandateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

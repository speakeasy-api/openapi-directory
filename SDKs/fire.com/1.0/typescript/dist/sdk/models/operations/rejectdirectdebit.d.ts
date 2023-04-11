import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RejectDirectDebitRequest extends SpeakeasyBase {
    directDebitUuid: string;
}
export declare class RejectDirectDebitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

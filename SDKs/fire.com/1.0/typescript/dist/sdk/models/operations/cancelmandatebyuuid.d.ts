import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelMandateByUuidRequest extends SpeakeasyBase {
    mandateUuid: string;
}
export declare class CancelMandateByUuidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

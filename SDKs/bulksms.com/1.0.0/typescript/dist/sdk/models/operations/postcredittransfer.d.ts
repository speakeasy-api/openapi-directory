import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCreditTransferSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostCreditTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposListLanguagesRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    language?: Record<string, number>;
}

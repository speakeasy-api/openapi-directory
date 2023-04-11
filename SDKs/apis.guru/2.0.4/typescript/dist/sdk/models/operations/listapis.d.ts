import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAPIsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apIs?: Record<string, shared.Api>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

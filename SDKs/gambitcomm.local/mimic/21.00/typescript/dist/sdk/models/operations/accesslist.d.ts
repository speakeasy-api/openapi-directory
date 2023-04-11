import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccessListResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    accessEntries?: shared.AccessEntry[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

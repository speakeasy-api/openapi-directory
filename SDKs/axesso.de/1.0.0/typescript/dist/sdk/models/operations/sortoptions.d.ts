import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SortOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    sortOptionResponse?: shared.SortOptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

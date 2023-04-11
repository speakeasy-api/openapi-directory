import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiPagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful
     */
    pages?: shared.Page[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

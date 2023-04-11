import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBinResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bin information (id and URL)
     */
    createStatus?: shared.CreateStatus;
    /**
     * 'JSON data too large' or 'Security key is too large'
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

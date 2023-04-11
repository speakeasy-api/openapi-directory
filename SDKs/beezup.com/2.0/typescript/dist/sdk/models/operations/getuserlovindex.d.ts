import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserLovIndexResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the list names
     */
    userLovIndex?: shared.UserLovIndex;
}

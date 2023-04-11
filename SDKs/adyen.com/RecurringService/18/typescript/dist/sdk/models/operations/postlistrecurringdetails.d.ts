import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostListRecurringDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    recurringDetailsResult?: shared.RecurringDetailsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

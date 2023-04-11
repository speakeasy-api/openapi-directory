import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkUpdateNegativeKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkUpdateNegativeKeywordResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkUpdateNegativeKeywordResponse?: shared.BulkUpdateNegativeKeywordResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

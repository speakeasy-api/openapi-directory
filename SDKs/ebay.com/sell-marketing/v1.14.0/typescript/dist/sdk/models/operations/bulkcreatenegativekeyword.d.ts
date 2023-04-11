import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkCreateNegativeKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class BulkCreateNegativeKeywordResponse extends SpeakeasyBase {
    /**
     * Success
     */
    bulkCreateNegativeKeywordResponse?: shared.BulkCreateNegativeKeywordResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateNegativeKeywordSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UpdateNegativeKeywordRequest extends SpeakeasyBase {
    /**
     * A type that defines the fields for the request to update a negative keyword.
     */
    updateNegativeKeywordRequest: shared.UpdateNegativeKeywordRequest;
    /**
     * The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.
     */
    negativeKeywordId: string;
}
export declare class UpdateNegativeKeywordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

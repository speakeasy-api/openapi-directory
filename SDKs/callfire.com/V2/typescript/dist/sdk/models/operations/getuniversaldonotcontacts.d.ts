import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUniversalDoNotContactsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetUniversalDoNotContactsRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An optional destination/source number for DNC, specified in E.164 format (11-digit). Example: 12132000384
     */
    fromNumber?: string;
    /**
     * A required destination phone number in E.164 format (11-digit). Example: 12132000384
     */
    toNumber: string;
}
export declare class GetUniversalDoNotContactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    itemListUniversalDoNotContact?: shared.ItemListUniversalDoNotContact;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

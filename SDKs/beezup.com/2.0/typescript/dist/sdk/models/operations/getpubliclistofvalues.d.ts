import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPublicListOfValuesRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts the following languages.
     */
    acceptLanguage?: string[];
    /**
     * ETag value to identify the last known version of requested resource.\
     *
     * @remarks
     * To avoid useless exchange, we recommend you to indicate the ETag you previously got from this operation.\
     * If the ETag value does not match the response will be 200 to give you a new content, otherwise the response will be: 304 Not Modified, without any content.\
     * For more details go to this link: http://tools.ietf.org/html/rfc7232#section-2.3
     *
     */
    ifNoneMatch?: string;
    /**
     * The list of value name your want to get
     */
    listName: string;
}
export declare class GetPublicListOfValuesResponse extends SpeakeasyBase {
    /**
     * List not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The list of values
     */
    publicListOfValuesResponse?: shared.PublicListOfValuesResponse;
}

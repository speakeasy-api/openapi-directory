import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomaticTransitionsRequest extends SpeakeasyBase {
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
     * The StoreId to filter by
     */
    storeId?: string;
}
export declare class GetAutomaticTransitionsResponse extends SpeakeasyBase {
    /**
     * Requested Store could not be found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully fetched list of configured automatic Order status transitions
     */
    automaticTransitionInfoList?: shared.AutomaticTransitionInfoList;
}

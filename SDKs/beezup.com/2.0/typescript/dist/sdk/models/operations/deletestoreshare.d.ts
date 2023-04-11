import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteStoreShareRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
    /**
     * The friend user id
     */
    userId: string;
}
export declare class DeleteStoreShareResponse extends SpeakeasyBase {
    /**
     * Store not found or customer not the owner
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

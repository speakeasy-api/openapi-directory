import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteStoreRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class DeleteStoreResponse extends SpeakeasyBase {
    /**
     * Store not found or customer not the owner
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

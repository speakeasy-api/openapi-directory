import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStoreRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
    updateStoreRequest: shared.UpdateStoreRequest;
}
export declare class UpdateStoreResponse extends SpeakeasyBase {
    /**
     * Store not found or customer not the owner
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

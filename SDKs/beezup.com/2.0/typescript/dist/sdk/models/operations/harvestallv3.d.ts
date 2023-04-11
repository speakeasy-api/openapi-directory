import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HarvestAllV3Request extends SpeakeasyBase {
    /**
     * The StoreId to filter by
     */
    storeId?: string;
}
export declare class HarvestAllV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested Store could not be found
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}

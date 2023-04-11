import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HarvestAllRequest extends SpeakeasyBase {
    /**
     * The StoreId to filter by
     */
    storeId?: string;
}
export declare class HarvestAllResponse extends SpeakeasyBase {
    /**
     * Requested Store could not be found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

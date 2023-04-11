import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetCustomColumnsRequest extends SpeakeasyBase {
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetCustomColumnsResponse extends SpeakeasyBase {
    /**
     * StoreId not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Custom column list
     */
    customColumnList?: shared.CustomColumnList;
}

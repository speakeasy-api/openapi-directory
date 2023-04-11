import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetReservedAmountRequest extends SpeakeasyBase {
    /**
     * The id or the sku of the article to query
     */
    id: string;
    /**
     * Either the value id or the value sku to specify the meaning of the id parameter
     */
    lookupBy?: string;
    /**
     * Optional the stock id if the multi stock feature is enabled
     */
    stockId?: number;
}
export declare class ArticleGetReservedAmountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelGetReservedAmountResponseData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

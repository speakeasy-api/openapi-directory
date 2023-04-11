import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleUpdateStockCodeFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelUpdateStockCodeResponseData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

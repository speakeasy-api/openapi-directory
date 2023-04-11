import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
 */
export declare enum OrderApiGetArticleTitleSourceEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class OrderApiGetRequest extends SpeakeasyBase {
    /**
     * The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text
     */
    articleTitleSource?: OrderApiGetArticleTitleSourceEnum;
    /**
     * The internal billbee id of the order
     */
    id: number;
}
export declare class OrderApiGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

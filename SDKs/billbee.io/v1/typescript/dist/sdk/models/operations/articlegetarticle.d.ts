import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetArticleRequest extends SpeakeasyBase {
    /**
     * The id or the sku of the article to query
     */
    id: string;
    /**
     * Either the value id, ean or the value sku to specify the meaning of the id parameter.
     */
    lookupBy?: string;
}
export declare class ArticleGetArticleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

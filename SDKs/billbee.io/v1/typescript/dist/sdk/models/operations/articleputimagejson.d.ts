import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticlePutImageJsonRequest extends SpeakeasyBase {
    /**
     * The ArticleApiImageModel
     */
    billbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel: shared.BillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
    /**
     * The image id. If you pass 0, the image will be added
     */
    imageId: number;
    /**
     * The product id
     */
    productId: number;
}
export declare class ArticlePutImageJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

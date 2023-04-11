import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetImageFromProductRequest extends SpeakeasyBase {
    /**
     * The Id of the image
     */
    imageId: number;
    /**
     * The Id of the product
     */
    productId: number;
}
export declare class ArticleGetImageFromProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

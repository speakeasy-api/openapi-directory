import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetImagesRequest extends SpeakeasyBase {
    /**
     * The Id of the product
     */
    productId: number;
}
export declare class ArticleGetImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetImageRequest extends SpeakeasyBase {
    /**
     * The Id of the image
     */
    imageId: number;
}
export declare class ArticleGetImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleImageRelationAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

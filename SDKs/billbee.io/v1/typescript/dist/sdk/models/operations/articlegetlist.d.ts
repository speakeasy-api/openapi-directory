import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetListRequest extends SpeakeasyBase {
    maximumBillBeeArticleId?: number;
    /**
     * Optional the oldest create date of the articles to be returned
     */
    minCreatedAt?: Date;
    minimumBillBeeArticleId?: number;
    /**
     * The current page to request starting with 1
     */
    page?: number;
    /**
     * The pagesize for the result list. Values between 1 and 250 are allowed
     */
    pageSize?: number;
}
export declare class ArticleGetListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPIModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

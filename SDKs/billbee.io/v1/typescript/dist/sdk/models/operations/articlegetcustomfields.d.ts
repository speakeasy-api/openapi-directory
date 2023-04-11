import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetCustomFieldsRequest extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class ArticleGetCustomFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

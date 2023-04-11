import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetCustomFieldRequest extends SpeakeasyBase {
    /**
     * The id of the custom field to query
     */
    id: number;
}
export declare class ArticleGetCustomFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel?: shared.RechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

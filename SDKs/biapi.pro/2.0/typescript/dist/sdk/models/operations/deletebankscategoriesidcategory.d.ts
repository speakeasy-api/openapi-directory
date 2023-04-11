import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteBanksCategoriesIdCategoryRequest extends SpeakeasyBase {
    expand?: string;
    idCategory: number;
}
export declare class DeleteBanksCategoriesIdCategoryResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on ConnectorCategory resource
     */
    connectorCategory?: shared.ConnectorCategory;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

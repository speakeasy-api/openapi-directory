import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBanksCategoriesIdCategoryRequestBody extends SpeakeasyBase {
    /**
     * new name for the supplied category
     */
    name: string;
}
export declare class PostBanksCategoriesIdCategoryRequest extends SpeakeasyBase {
    requestBody: PostBanksCategoriesIdCategoryRequestBody;
    expand?: string;
    idCategory: number;
}
export declare class PostBanksCategoriesIdCategoryResponse extends SpeakeasyBase {
    /**
     * Successful POST on ConnectorCategory resource
     */
    connectorCategory?: shared.ConnectorCategory;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

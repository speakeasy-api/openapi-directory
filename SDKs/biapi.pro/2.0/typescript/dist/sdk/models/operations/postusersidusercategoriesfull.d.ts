import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserCategoriesFullRequestBody extends SpeakeasyBase {
    /**
     * Accountant account number.
     */
    accountantAccount?: string;
    /**
     * Color of the category.
     */
    color?: string;
    /**
     * ID of the parent category.
     */
    idParentCategory?: number;
    /**
     * ID of the parent category to be displayed.
     */
    idParentCategoryInMenu?: number;
    /**
     * Is an income category. If null, this is both an income and an expense category.
     */
    income?: boolean;
    /**
     * Name of the category.
     */
    name?: string;
    /**
     * This category accepts opposite sign of transactions.
     */
    refundable?: boolean;
}
export declare class PostUsersIdUserCategoriesFullRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdUserCategoriesFullRequestBody;
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserCategoriesFullResponse extends SpeakeasyBase {
    /**
     * Successful POST on Category resource
     */
    category?: shared.Category;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

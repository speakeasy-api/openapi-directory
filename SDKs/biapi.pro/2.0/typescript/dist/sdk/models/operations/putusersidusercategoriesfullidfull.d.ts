import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserCategoriesFullIdFullRequestBody extends SpeakeasyBase {
    /**
     * Accountant account number.
     */
    accountantAccount?: string;
    /**
     * Hide (but not delete) a category. Must be 0, 1 or toggle.
     */
    hide?: string;
}
export declare class PutUsersIdUserCategoriesFullIdFullRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdUserCategoriesFullIdFullRequestBody;
    expand?: string;
    idFull: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserCategoriesFullIdFullResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Category resource
     */
    category?: shared.Category;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

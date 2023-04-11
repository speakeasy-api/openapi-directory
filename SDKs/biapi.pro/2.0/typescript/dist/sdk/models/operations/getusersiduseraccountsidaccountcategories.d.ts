import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserAccountsIdAccountCategoriesRequest extends SpeakeasyBase {
    idAccount: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class GetUsersIdUserAccountsIdAccountCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

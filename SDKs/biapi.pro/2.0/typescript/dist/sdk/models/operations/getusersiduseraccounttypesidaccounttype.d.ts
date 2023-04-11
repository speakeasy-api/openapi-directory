import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserAccountTypesIdAccountTypeRequest extends SpeakeasyBase {
    expand?: string;
    idAccountType: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class GetUsersIdUserAccountTypesIdAccountTypeResponse extends SpeakeasyBase {
    /**
     * Successful GET on AccountType resource
     */
    accountType?: shared.AccountType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

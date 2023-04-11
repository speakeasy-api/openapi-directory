import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountTypesIdAccountTypeRequest extends SpeakeasyBase {
    expand?: string;
    idAccountType: number;
}
export declare class GetAccountTypesIdAccountTypeResponse extends SpeakeasyBase {
    /**
     * Successful GET on AccountType resource
     */
    accountType?: shared.AccountType;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1BankAccountsIdRequest extends SpeakeasyBase {
    /**
     * Id of Bank Account to return.
     */
    id: number;
}
export declare class GetV1BankAccountsIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bankAccountDto?: shared.BankAccountDto;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

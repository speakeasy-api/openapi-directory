import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultAccountDto?: shared.PageResultAccountDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

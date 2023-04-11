import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountGetResponse extends SpeakeasyBase {
    apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

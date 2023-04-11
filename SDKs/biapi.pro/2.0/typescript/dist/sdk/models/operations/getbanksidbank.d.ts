import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksIdBankRequest extends SpeakeasyBase {
    expand?: string;
    idBank: number;
}
export declare class GetBanksIdBankResponse extends SpeakeasyBase {
    /**
     * Successful GET on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1CustomersIdRequest extends SpeakeasyBase {
    /**
     * Id of Customer to return.
     */
    id: number;
    /**
     * If "true" then Customer's ledger balance will be calculated; otherwise balance will be returned as 0.
     */
    needBalance?: boolean;
}
export declare class GetV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerDto?: shared.CustomerDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

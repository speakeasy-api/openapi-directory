import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1DonationsCryptoCalculateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The currency of the transaction.
 */
export declare enum GetApiV1DonationsCryptoCalculateCurrencyEnum {
    Eth = "eth",
    Btc = "btc"
}
export declare class GetApiV1DonationsCryptoCalculateRequest extends SpeakeasyBase {
    /**
     * The number of transactions to offset.
     */
    count?: number;
    /**
     * The currency of the transaction.
     */
    currency: GetApiV1DonationsCryptoCalculateCurrencyEnum;
}
export declare class GetApiV1DonationsCryptoCalculateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

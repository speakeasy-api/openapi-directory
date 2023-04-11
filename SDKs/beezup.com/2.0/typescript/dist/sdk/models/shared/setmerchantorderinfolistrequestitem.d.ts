import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetMerchantOrderInfoListRequestItem extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    /**
     * The BeezUP Order identifier
     */
    beezUPOrderId: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
    /**
     * The order merchant identifier
     */
    orderMerchantOrderId: string;
}

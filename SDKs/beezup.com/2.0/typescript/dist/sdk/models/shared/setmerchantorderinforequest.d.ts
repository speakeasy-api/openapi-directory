import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetMerchantOrderInfoRequest extends SpeakeasyBase {
    /**
     * The e-commerce software name of the merchant
     */
    orderMerchantECommerceSoftwareName: string;
    /**
     * The e-commece software version of the merchant
     */
    orderMerchantECommerceSoftwareVersion: string;
    /**
     * The order merchant identifier
     */
    orderMerchantOrderId: string;
}

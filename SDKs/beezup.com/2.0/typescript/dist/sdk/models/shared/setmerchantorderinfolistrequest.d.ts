import { SpeakeasyBase } from "../../../internal/utils";
import { SetMerchantOrderInfoListRequestItem } from "./setmerchantorderinfolistrequestitem";
export declare class SetMerchantOrderInfoListRequest extends SpeakeasyBase {
    /**
     * The e-commerce software name of the merchant
     */
    orderMerchantECommerceSoftwareName: string;
    /**
     * The e-commece software version of the merchant
     */
    orderMerchantECommerceSoftwareVersion: string;
    orders: SetMerchantOrderInfoListRequestItem[];
}

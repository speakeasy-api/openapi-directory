import { SpeakeasyBase } from "../../../internal/utils";
import { SetMerchantOrderInfoListRequestItem } from "./setmerchantorderinfolistrequestitem";
export declare class SetMerchantOrderInfoListRequest extends SpeakeasyBase {
    orderMerchantECommerceSoftwareName: string;
    orderMerchantECommerceSoftwareVersion: string;
    orders: SetMerchantOrderInfoListRequestItem[];
}

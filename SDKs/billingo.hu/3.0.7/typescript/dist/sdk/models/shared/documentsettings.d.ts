import { SpeakeasyBase } from "../../../internal/utils";
import { OnlinePaymentEnum } from "./onlinepaymentenum";
import { RoundEnum } from "./roundenum";
export declare class DocumentSettings extends SpeakeasyBase {
    mediatedService?: boolean;
    onlinePayment?: OnlinePaymentEnum;
    placeId?: number;
    round?: RoundEnum;
    withoutFinancialFulfillment?: boolean;
}

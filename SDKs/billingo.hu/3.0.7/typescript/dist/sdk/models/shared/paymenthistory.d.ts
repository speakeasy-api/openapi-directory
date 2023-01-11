import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";
export declare class PaymentHistory extends SpeakeasyBase {
    conversionRate?: number;
    date: Date;
    paymentMethod: PaymentMethodEnum;
    price: number;
    voucherNumber?: string;
}

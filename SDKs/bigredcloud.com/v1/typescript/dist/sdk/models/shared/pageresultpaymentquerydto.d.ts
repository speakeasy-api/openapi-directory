import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentQueryDto } from "./paymentquerydto";
/**
 * OK
 */
export declare class PageResultPaymentQueryDto extends SpeakeasyBase {
    count?: number;
    items?: PaymentQueryDto[];
    nextPageLink?: string;
}

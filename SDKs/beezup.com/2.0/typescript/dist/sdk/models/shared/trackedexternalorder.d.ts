import { SpeakeasyBase } from "../../../internal/utils";
import { TrackedExternalOrderProduct } from "./trackedexternalorderproduct";
export declare class TrackedExternalOrder extends SpeakeasyBase {
    currencyCode: string;
    merchantOrderId: string;
    paymentValidated: boolean;
    products?: TrackedExternalOrderProduct[];
    totalAmount: number;
    utcDate: Date;
    visitorId?: string;
}

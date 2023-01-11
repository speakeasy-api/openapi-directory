import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { TrackedOrderProduct } from "./trackedorderproduct";
export declare class TrackedOrder extends SpeakeasyBase {
    channel: BeezUpCommonChannelBasicInfo;
    currencyCode: string;
    merchantOrderId: string;
    paymentValidated: boolean;
    products: TrackedOrderProduct[];
    totalAmount: number;
    utcDate: Date;
}

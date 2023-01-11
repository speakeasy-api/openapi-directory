import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { BeezUpCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";
export declare class TrackedClick extends SpeakeasyBase {
    channel: BeezUpCommonChannelBasicInfo;
    ipAddress: string;
    product: BeezUpCommonProductBasicInfo;
    utcDate: Date;
}

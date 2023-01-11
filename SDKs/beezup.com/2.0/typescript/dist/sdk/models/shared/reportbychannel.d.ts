import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { ReportByChannelLinks } from "./reportbychannellinks";
export declare class ReportByChannel extends SpeakeasyBase {
    catalogProductCount: number;
    channel: BeezUpCommonChannelBasicInfo;
    clickCount: number;
    cost: number;
    enabledProductCount: number;
    links: ReportByChannelLinks;
    margin?: number;
    orderCount: number;
    performanceIndicator: number;
    roi?: number;
    soldProductCount: number;
    totalSales: number;
}

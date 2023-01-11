import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByProductLinks } from "./reportbyproductlinks";
import { BeezUpCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";
export declare class ReportByProduct extends SpeakeasyBase {
    channelCount: number;
    clickCount: number;
    cost: number;
    enabledOnChannelCount: number;
    links: ReportByProductLinks;
    margin?: number;
    orderCount: number;
    performanceIndicator: number;
    product: BeezUpCommonProductBasicInfo;
    roi?: number;
    soldProductCount: number;
    totalSales: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ReportByChannel } from "./reportbychannel";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
export declare class ReportByChannelResponse extends SpeakeasyBase {
    channels: ReportByChannel[];
    currencyCode: string;
    links: ReportByCommonResponseLinks;
    paginationResult: BeezUpCommonPaginationResult;
}

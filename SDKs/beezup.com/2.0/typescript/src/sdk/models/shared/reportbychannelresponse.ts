import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportByChannel } from "./reportbychannel";
import { ReportByCommonResponseLinks } from "./reportbycommonresponselinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



export class ReportByChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: ReportByChannel })
  channels: ReportByChannel[];

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ReportByCommonResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: BeezUpCommonPaginationResult;
}

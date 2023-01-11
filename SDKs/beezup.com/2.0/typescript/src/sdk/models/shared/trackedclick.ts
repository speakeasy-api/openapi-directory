import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { BeezUpCommonProductBasicInfo } from "./beezupcommonproductbasicinfo";



export class TrackedClick extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: BeezUpCommonChannelBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: BeezUpCommonProductBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=utcDate" })
  utcDate: Date;
}

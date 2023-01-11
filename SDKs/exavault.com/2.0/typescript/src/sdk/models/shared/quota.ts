import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Quota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimit" })
  bandwidthLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=bandwidthUsed" })
  bandwidthUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=diskLimit" })
  diskLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=diskUsed" })
  diskUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=noticeEnabled" })
  noticeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noticeThreshold" })
  noticeThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionsLimit" })
  transactionsLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionsNoticeEnabled" })
  transactionsNoticeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transactionsNoticeThreshold" })
  transactionsNoticeThreshold?: number;
}

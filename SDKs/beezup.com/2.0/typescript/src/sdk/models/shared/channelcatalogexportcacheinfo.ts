import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelCatalogExportCacheInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheStatus" })
  cacheStatus: string;

  @SpeakeasyMetadata({ data: "json, name=expirationUtcDate" })
  expirationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=feedUrl" })
  feedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lastContentChangeUtcDate" })
  lastContentChangeUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate?: Date;
}

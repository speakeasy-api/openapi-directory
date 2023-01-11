import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelCatalogExportationReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheStatus" })
  cacheStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=clientIpAddress" })
  clientIpAddress: string;

  @SpeakeasyMetadata({ data: "json, name=clientUserAgent" })
  clientUserAgent: string;

  @SpeakeasyMetadata({ data: "json, name=exportationDuration" })
  exportationDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=exportationUtcDate" })
  exportationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=exportedProductCount" })
  exportedProductCount?: number;
}

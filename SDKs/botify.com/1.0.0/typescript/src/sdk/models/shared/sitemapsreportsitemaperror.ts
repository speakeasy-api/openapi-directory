import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SitemapsReportSitemapError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

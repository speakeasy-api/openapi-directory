import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SitemapsReportSitemapError } from "./sitemapsreportsitemaperror";



export class SitemapsReportSitemap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: SitemapsReportSitemapError;

  @SpeakeasyMetadata({ data: "json, name=file_type" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_urls" })
  invalidUrls?: number;

  @SpeakeasyMetadata({ data: "json, name=sitemap_indexes" })
  sitemapIndexes?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=valid_urls" })
  validUrls?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlsQuery } from "./urlsquery";



export class CsvExportStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: number;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=job_status" })
  jobStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=job_url" })
  jobUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=nb_results" })
  nbResults?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: UrlsQuery;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: string;
}

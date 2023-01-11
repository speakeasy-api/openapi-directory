import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyNameMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=job_time" })
  jobTime?: number;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;
}

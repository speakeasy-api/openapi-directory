import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListBackendJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs" })
  jobs?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: Record<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBackendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: Record<string, any>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateBackendJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Operation" })
  operation?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime?: Record<string, any>;
}

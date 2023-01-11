import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBackendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmplifyMetaConfig" })
  amplifyMetaConfig?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentList" })
  backendEnvironmentList?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;
}

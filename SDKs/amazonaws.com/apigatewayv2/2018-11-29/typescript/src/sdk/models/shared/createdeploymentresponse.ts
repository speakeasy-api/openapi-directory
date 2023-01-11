import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeploymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoDeployed" })
  autoDeployed?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DeploymentId" })
  deploymentId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatus" })
  deploymentStatus?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DeploymentStatusMessage" })
  deploymentStatusMessage?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;
}

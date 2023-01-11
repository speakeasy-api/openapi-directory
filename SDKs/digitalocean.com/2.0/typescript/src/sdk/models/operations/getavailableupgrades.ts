import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailableUpgradesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kubernetes_version" })
  kubernetesVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}


export class GetAvailableUpgrades200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available_upgrade_versions", elemType: GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions })
  availableUpgradeVersions?: GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions[];
}


export class GetAvailableUpgrades401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetAvailableUpgradesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAvailableUpgradesPathParams;
}


export class GetAvailableUpgradesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAvailableUpgrades200ApplicationJSONObject?: GetAvailableUpgrades200ApplicationJson;

  @SpeakeasyMetadata()
  getAvailableUpgrades401ApplicationJSONObject?: GetAvailableUpgrades401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

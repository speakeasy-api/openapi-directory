import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableUpgradesPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions extends SpeakeasyBase {
    kubernetesVersion?: string;
    slug?: string;
}
export declare class GetAvailableUpgrades200ApplicationJson extends SpeakeasyBase {
    availableUpgradeVersions?: GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions[];
}
export declare class GetAvailableUpgrades401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetAvailableUpgradesRequest extends SpeakeasyBase {
    pathParams: GetAvailableUpgradesPathParams;
}
export declare class GetAvailableUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getAvailableUpgrades200ApplicationJSONObject?: GetAvailableUpgrades200ApplicationJson;
    getAvailableUpgrades401ApplicationJSONObject?: GetAvailableUpgrades401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

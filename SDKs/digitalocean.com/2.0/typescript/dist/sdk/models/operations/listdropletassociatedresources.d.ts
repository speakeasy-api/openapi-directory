import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletAssociatedResourcesPathParams extends SpeakeasyBase {
    dropletId: number;
}
/**
 * An objects containing information about a resource associated with a Droplet.
**/
export declare class ListDropletAssociatedResources200ApplicationJsonSnapshots extends SpeakeasyBase {
    cost?: string;
    id?: string;
    name?: string;
}
export declare class ListDropletAssociatedResources200ApplicationJson extends SpeakeasyBase {
    snapshots?: ListDropletAssociatedResources200ApplicationJsonSnapshots[];
    volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
    volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
}
export declare class ListDropletAssociatedResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletAssociatedResourcesRequest extends SpeakeasyBase {
    pathParams: ListDropletAssociatedResourcesPathParams;
}
export declare class ListDropletAssociatedResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletAssociatedResources200ApplicationJSONObject?: ListDropletAssociatedResources200ApplicationJson;
    listDropletAssociatedResources401ApplicationJSONObject?: ListDropletAssociatedResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

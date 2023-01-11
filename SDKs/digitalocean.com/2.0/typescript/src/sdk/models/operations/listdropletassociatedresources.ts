import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDropletAssociatedResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


// ListDropletAssociatedResources200ApplicationJsonSnapshots
/** 
 * An objects containing information about a resource associated with a Droplet.
**/
export class ListDropletAssociatedResources200ApplicationJsonSnapshots extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ListDropletAssociatedResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: ListDropletAssociatedResources200ApplicationJsonSnapshots })
  snapshots?: ListDropletAssociatedResources200ApplicationJsonSnapshots[];

  @SpeakeasyMetadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems })
  volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems })
  volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
}


export class ListDropletAssociatedResources401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletAssociatedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDropletAssociatedResourcesPathParams;
}


export class ListDropletAssociatedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDropletAssociatedResources200ApplicationJSONObject?: ListDropletAssociatedResources200ApplicationJson;

  @SpeakeasyMetadata()
  listDropletAssociatedResources401ApplicationJSONObject?: ListDropletAssociatedResources401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

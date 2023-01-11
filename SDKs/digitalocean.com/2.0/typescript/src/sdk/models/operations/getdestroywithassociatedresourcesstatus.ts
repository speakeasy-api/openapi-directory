import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDestroyWithAssociatedResourcesStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet
/** 
 * An object containing information about a resource scheduled for deletion.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destroyed_at" })
  destroyedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources
/** 
 * An object containing additional information about resource related to a Droplet requested to be destroyed.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];

  @SpeakeasyMetadata({ data: "json, name=volume_snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet })
  volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];
}


// GetDestroyWithAssociatedResourcesStatus200ApplicationJson
/** 
 * An objects containing information about a resources scheduled for deletion.
**/
export class GetDestroyWithAssociatedResourcesStatus200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=droplet" })
  droplet?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet;

  @SpeakeasyMetadata({ data: "json, name=failures" })
  failures?: number;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources;
}


export class GetDestroyWithAssociatedResourcesStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDestroyWithAssociatedResourcesStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDestroyWithAssociatedResourcesStatusPathParams;
}


export class GetDestroyWithAssociatedResourcesStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject?: GetDestroyWithAssociatedResourcesStatus200ApplicationJson;

  @SpeakeasyMetadata()
  getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject?: GetDestroyWithAssociatedResourcesStatus401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDestroyWithAssociatedResourcesStatusPathParams extends SpeakeasyBase {
    dropletId: number;
}
/**
 * An object containing information about a resource scheduled for deletion.
**/
export declare class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet extends SpeakeasyBase {
    destroyedAt?: Date;
    errorMessage?: string;
    id?: string;
    name?: string;
}
/**
 * An object containing additional information about resource related to a Droplet requested to be destroyed.
**/
export declare class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources extends SpeakeasyBase {
    snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];
    volumeSnapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];
    volumes?: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet[];
}
/**
 * An objects containing information about a resources scheduled for deletion.
**/
export declare class GetDestroyWithAssociatedResourcesStatus200ApplicationJson extends SpeakeasyBase {
    completedAt?: Date;
    droplet?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet;
    failures?: number;
    resources?: GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources;
}
export declare class GetDestroyWithAssociatedResourcesStatus401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDestroyWithAssociatedResourcesStatusRequest extends SpeakeasyBase {
    pathParams: GetDestroyWithAssociatedResourcesStatusPathParams;
}
export declare class GetDestroyWithAssociatedResourcesStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject?: GetDestroyWithAssociatedResourcesStatus200ApplicationJson;
    getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject?: GetDestroyWithAssociatedResourcesStatus401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

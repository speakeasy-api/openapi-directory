import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllTags200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllTags200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllTags200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllTags200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
/**
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
export declare class ListAllTags200ApplicationJsonTagsResources extends SpeakeasyBase {
    count?: number;
    databases?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
    droplets?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
    imgages?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
    lastTaggedUri?: string;
    volumeSnapshots?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
    volumes?: shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
}
/**
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
export declare class ListAllTags200ApplicationJsonTags extends SpeakeasyBase {
    name?: string;
    resources?: ListAllTags200ApplicationJsonTagsResources;
}
export declare class ListAllTags200ApplicationJson extends SpeakeasyBase {
    links?: ListAllTags200ApplicationJsonLinks;
    meta: ListAllTags200ApplicationJsonMeta;
    tags?: ListAllTags200ApplicationJsonTags[];
}
export declare class ListAllTags401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllTags200ApplicationJSONObject?: ListAllTags200ApplicationJson;
    listAllTags401ApplicationJSONObject?: ListAllTags401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

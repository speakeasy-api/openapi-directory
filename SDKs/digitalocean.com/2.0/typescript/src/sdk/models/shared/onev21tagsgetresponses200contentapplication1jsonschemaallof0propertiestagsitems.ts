import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 } from "./onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0";



// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources
/** 
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=databases" })
  databases?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=droplets" })
  droplets?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=imgages" })
  imgages?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=last_tagged_uri" })
  lastTaggedUri?: string;

  @SpeakeasyMetadata({ data: "json, name=volume_snapshots" })
  volumeSnapshots?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;

  @SpeakeasyMetadata({ data: "json, name=volumes" })
  volumes?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0;
}


// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput
/** 
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
/** 
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
export class Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources;
}

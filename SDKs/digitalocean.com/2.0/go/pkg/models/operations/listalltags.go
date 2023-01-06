package operations

import (
	"openapi/pkg/models/shared"
)

// ListAllTags200ApplicationJSONTagsResources
// Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
type ListAllTags200ApplicationJSONTagsResources struct {
	Databases       *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases,omitempty"`
	Droplets        *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets,omitempty"`
	Imgages         *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages,omitempty"`
	VolumeSnapshots *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots,omitempty"`
	Volumes         *shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes,omitempty"`
}

// ListAllTags200ApplicationJSONTags
// A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
// Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
type ListAllTags200ApplicationJSONTags struct {
	Name      *string                                     `json:"name,omitempty"`
	Resources *ListAllTags200ApplicationJSONTagsResources `json:"resources,omitempty"`
}

type ListAllTags200ApplicationJSON struct {
	Tags []ListAllTags200ApplicationJSONTags `json:"tags,omitempty"`
}

type ListAllTags401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListAllTagsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListAllTags200ApplicationJSONObject                       *ListAllTags200ApplicationJSON
	ListAllTags401ApplicationJSONObject                       *ListAllTags401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}

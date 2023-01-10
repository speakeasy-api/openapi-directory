package shared

// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources
// Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources struct {
	Count           *int64                                                                                                    `json:"count,omitempty"`
	Databases       *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"databases,omitempty"`
	Droplets        *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"droplets,omitempty"`
	Imgages         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"imgages,omitempty"`
	LastTaggedURI   *string                                                                                                   `json:"last_tagged_uri,omitempty"`
	VolumeSnapshots *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volume_snapshots,omitempty"`
	Volumes         *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0 `json:"volumes,omitempty"`
}

// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput
// A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
// Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput struct {
	Name *string `json:"name,omitempty"`
}

// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
// A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
// Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
type Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems struct {
	Name      *string                                                                                   `json:"name,omitempty"`
	Resources *Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources `json:"resources,omitempty"`
}

// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UploadEntityDefinitionsRequest struct {
	DeprecateExistingEntities *bool               `json:"deprecateExistingEntities,omitempty"`
	Document                  *DefinitionDocument `json:"document,omitempty"`
	SyncWithPublicNamespace   *bool               `json:"syncWithPublicNamespace,omitempty"`
}

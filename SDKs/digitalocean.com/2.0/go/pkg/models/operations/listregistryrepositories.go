package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListRegistryRepositoriesPathParams struct {
	RegistryName string `pathParam:"style=simple,explode=false,name=registry_name"`
}

type ListRegistryRepositoriesQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag struct {
	CompressedSizeBytes *int64     `json:"compressed_size_bytes,omitempty"`
	ManifestDigest      *string    `json:"manifest_digest,omitempty"`
	RegistryName        *string    `json:"registry_name,omitempty"`
	RepositoryName      *string    `json:"repository_name,omitempty"`
	SizeBytes           *int64     `json:"size_bytes,omitempty"`
	Tag                 *string    `json:"tag,omitempty"`
	UpdatedAt           *time.Time `json:"updated_at,omitempty"`
}

type ListRegistryRepositories200ApplicationJSONRepositories struct {
	LatestTag    *ListRegistryRepositories200ApplicationJSONRepositoriesLatestTag `json:"latest_tag,omitempty"`
	Name         *string                                                          `json:"name,omitempty"`
	RegistryName *string                                                          `json:"registry_name,omitempty"`
	TagCount     *int64                                                           `json:"tag_count,omitempty"`
}

type ListRegistryRepositories200ApplicationJSON struct {
	Repositories []ListRegistryRepositories200ApplicationJSONRepositories `json:"repositories,omitempty"`
}

type ListRegistryRepositories401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListRegistryRepositoriesRequest struct {
	PathParams  ListRegistryRepositoriesPathParams
	QueryParams ListRegistryRepositoriesQueryParams
}

type ListRegistryRepositoriesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListRegistryRepositories200ApplicationJSONObject          *ListRegistryRepositories200ApplicationJSON
	ListRegistryRepositories401ApplicationJSONObject          *ListRegistryRepositories401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}

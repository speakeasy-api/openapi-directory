package shared

type PutRepositoryCatalogDataRequest struct {
	CatalogData    RepositoryCatalogDataInput1 `json:"catalogData"`
	RegistryID     *string                     `json:"registryId,omitempty"`
	RepositoryName string                      `json:"repositoryName"`
}

package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRepositoryTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public ListRepositoryTagsPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_name")
    public String repositoryName;
    public ListRepositoryTagsPathParams withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}
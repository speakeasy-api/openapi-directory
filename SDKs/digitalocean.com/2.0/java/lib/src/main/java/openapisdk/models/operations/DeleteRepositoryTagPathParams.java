package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public DeleteRepositoryTagPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_name")
    public String repositoryName;
    public DeleteRepositoryTagPathParams withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_tag")
    public String repositoryTag;
    public DeleteRepositoryTagPathParams withRepositoryTag(String repositoryTag) {
        this.repositoryTag = repositoryTag;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoryManifestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=manifest_digest")
    public String manifestDigest;
    public DeleteRepositoryManifestPathParams withManifestDigest(String manifestDigest) {
        this.manifestDigest = manifestDigest;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=registry_name")
    public String registryName;
    public DeleteRepositoryManifestPathParams withRegistryName(String registryName) {
        this.registryName = registryName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_name")
    public String repositoryName;
    public DeleteRepositoryManifestPathParams withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}
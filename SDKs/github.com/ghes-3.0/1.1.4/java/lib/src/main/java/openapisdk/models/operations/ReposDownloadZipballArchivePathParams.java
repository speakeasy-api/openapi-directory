package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposDownloadZipballArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposDownloadZipballArchivePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ref")
    public String ref;
    public ReposDownloadZipballArchivePathParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposDownloadZipballArchivePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
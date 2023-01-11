package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsAddRepoToInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsAddRepoToInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public AppsAddRepoToInstallationPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}
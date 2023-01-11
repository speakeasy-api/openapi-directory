package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsRemoveRepoFromInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsRemoveRepoFromInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public AppsRemoveRepoFromInstallationPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}
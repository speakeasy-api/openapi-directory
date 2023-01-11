package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListEnvironmentSecretsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_name")
    public String environmentName;
    public ActionsListEnvironmentSecretsPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsListEnvironmentSecretsPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
}
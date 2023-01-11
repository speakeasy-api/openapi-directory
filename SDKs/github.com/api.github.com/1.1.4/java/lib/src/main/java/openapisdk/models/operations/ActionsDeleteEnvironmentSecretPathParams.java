package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDeleteEnvironmentSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_name")
    public String environmentName;
    public ActionsDeleteEnvironmentSecretPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsDeleteEnvironmentSecretPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsDeleteEnvironmentSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}
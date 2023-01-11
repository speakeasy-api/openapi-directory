package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsGetEnvironmentSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_name")
    public String environmentName;
    public ActionsGetEnvironmentSecretPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsGetEnvironmentSecretPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsGetEnvironmentSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}
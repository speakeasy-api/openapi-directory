package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateOrUpdateEnvironmentSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_name")
    public String environmentName;
    public ActionsCreateOrUpdateEnvironmentSecretPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repository_id")
    public Long repositoryId;
    public ActionsCreateOrUpdateEnvironmentSecretPathParams withRepositoryId(Long repositoryId) {
        this.repositoryId = repositoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsCreateOrUpdateEnvironmentSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}
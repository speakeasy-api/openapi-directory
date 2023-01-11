package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsCreateOrUpdateRepoSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsCreateOrUpdateRepoSecretPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsCreateOrUpdateRepoSecretPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_name")
    public String secretName;
    public ActionsCreateOrUpdateRepoSecretPathParams withSecretName(String secretName) {
        this.secretName = secretName;
        return this;
    }
}
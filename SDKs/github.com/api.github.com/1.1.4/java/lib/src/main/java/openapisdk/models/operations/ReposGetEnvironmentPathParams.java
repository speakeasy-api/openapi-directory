package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_name")
    public String environmentName;
    public ReposGetEnvironmentPathParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetEnvironmentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetEnvironmentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
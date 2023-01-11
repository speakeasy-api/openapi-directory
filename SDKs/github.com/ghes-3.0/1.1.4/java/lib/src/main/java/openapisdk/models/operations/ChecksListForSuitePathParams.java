package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksListForSuitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=check_suite_id")
    public Long checkSuiteId;
    public ChecksListForSuitePathParams withCheckSuiteId(Long checkSuiteId) {
        this.checkSuiteId = checkSuiteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ChecksListForSuitePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ChecksListForSuitePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksGetSuitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=check_suite_id")
    public Long checkSuiteId;
    public ChecksGetSuitePathParams withCheckSuiteId(Long checkSuiteId) {
        this.checkSuiteId = checkSuiteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ChecksGetSuitePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ChecksGetSuitePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksRerequestSuitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=check_suite_id")
    public Long checkSuiteId;
    public ChecksRerequestSuitePathParams withCheckSuiteId(Long checkSuiteId) {
        this.checkSuiteId = checkSuiteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ChecksRerequestSuitePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ChecksRerequestSuitePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
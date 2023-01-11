package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=check_run_id")
    public Long checkRunId;
    public ChecksUpdatePathParams withCheckRunId(Long checkRunId) {
        this.checkRunId = checkRunId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ChecksUpdatePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ChecksUpdatePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetRulePrioritiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetRulePrioritiesActionEnum action;
    public PostSetRulePrioritiesQueryParams withAction(PostSetRulePrioritiesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetRulePrioritiesVersionEnum version;
    public PostSetRulePrioritiesQueryParams withVersion(PostSetRulePrioritiesVersionEnum version) {
        this.version = version;
        return this;
    }
}
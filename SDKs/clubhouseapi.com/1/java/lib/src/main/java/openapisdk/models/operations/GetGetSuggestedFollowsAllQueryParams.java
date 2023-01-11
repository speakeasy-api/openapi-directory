package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSuggestedFollowsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=in_onboarding")
    public Boolean inOnboarding;
    public GetGetSuggestedFollowsAllQueryParams withInOnboarding(Boolean inOnboarding) {
        this.inOnboarding = inOnboarding;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetGetSuggestedFollowsAllQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGetSuggestedFollowsAllQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
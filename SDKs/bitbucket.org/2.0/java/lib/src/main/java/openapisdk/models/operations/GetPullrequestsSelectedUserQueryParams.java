package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullrequestsSelectedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public GetPullrequestsSelectedUserStateEnum state;
    public GetPullrequestsSelectedUserQueryParams withState(GetPullrequestsSelectedUserStateEnum state) {
        this.state = state;
        return this;
    }
}
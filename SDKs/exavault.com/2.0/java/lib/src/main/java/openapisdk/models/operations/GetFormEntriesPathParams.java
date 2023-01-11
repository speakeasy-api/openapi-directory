package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormEntriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetFormEntriesPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}
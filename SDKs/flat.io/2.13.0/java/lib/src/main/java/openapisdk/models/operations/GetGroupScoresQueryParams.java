package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupScoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent")
    public String parent;
    public GetGroupScoresQueryParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}
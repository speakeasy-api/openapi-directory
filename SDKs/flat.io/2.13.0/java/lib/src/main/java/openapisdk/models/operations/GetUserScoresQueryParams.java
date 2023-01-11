package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserScoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent")
    public String parent;
    public GetUserScoresQueryParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}
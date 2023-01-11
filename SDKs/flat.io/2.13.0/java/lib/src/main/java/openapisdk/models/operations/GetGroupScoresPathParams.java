package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupScoresPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group")
    public String group;
    public GetGroupScoresPathParams withGroup(String group) {
        this.group = group;
        return this;
    }
}
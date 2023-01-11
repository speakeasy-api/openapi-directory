package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesIdPreviousSiblingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEpisodesIdPreviousSiblingPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
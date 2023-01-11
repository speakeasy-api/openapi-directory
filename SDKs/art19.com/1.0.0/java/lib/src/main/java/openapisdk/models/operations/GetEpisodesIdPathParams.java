package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetEpisodesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
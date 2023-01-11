package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OpportunitiesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStreamingDistributionConfig20161125PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetStreamingDistributionConfig20161125PathParams withId(String id) {
        this.id = id;
        return this;
    }
}
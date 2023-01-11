package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStreamingDistribution20180618PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeleteStreamingDistribution20180618PathParams withId(String id) {
        this.id = id;
        return this;
    }
}
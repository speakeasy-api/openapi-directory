package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamingDistribution20170325PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public UpdateStreamingDistribution20170325PathParams withId(String id) {
        this.id = id;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDistribution20171030PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeleteDistribution20171030PathParams withId(String id) {
        this.id = id;
        return this;
    }
}
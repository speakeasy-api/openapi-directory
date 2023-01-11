package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public JobsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}
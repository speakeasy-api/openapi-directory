package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContainersIdStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetContainersIdStatusPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
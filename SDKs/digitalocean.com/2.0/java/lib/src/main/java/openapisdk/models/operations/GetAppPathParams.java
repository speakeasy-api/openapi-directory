package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAppPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
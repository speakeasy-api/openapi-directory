package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionGetNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetSessionGetNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessioncreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetSessioncreatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingsFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetFindingsFilterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
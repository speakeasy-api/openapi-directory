package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFindingsFilterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UpdateFindingsFilterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
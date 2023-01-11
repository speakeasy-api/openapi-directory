package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReisezentrenIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetReisezentrenIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
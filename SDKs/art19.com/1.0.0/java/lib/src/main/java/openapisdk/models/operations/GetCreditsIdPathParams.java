package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCreditsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
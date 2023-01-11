package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomDataIdentifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetCustomDataIdentifierPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
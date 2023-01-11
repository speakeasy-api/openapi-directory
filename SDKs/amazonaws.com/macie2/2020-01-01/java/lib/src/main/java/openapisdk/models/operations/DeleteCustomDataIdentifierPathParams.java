package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomDataIdentifierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteCustomDataIdentifierPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
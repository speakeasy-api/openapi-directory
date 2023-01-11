package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ContactsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}
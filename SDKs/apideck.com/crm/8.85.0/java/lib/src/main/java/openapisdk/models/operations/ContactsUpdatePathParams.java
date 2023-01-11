package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ContactsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}
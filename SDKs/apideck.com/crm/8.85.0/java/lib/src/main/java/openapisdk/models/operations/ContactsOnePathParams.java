package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ContactsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}
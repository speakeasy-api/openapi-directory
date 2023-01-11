package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public CreateContactPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
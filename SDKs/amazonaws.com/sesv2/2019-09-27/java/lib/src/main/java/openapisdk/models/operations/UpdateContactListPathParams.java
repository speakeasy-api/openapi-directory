package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContactListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public UpdateContactListPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
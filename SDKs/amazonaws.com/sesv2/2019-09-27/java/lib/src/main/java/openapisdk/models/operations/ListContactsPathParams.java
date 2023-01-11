package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContactsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public ListContactsPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
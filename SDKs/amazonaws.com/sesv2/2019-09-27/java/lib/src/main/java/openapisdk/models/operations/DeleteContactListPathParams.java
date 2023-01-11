package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContactListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public DeleteContactListPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
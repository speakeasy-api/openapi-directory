package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public GetContactListPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
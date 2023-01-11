package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public DeleteContactPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailAddress")
    public String emailAddress;
    public DeleteContactPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}
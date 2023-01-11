package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ContactListName")
    public String contactListName;
    public GetContactPathParams withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmailAddress")
    public String emailAddress;
    public GetContactPathParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContactListDestination
 * An object that contains details about the action of a contact list.
**/
public class ContactListDestination {
    @JsonProperty("ContactListImportAction")
    public ContactListImportActionEnum contactListImportAction;
    public ContactListDestination withContactListImportAction(ContactListImportActionEnum contactListImportAction) {
        this.contactListImportAction = contactListImportAction;
        return this;
    }
    @JsonProperty("ContactListName")
    public String contactListName;
    public ContactListDestination withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
}
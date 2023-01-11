package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsFilter {
    @SpeakeasyMetadata("queryParam:name=email")
    public String email;
    public ContactsFilter withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=first_name")
    public String firstName;
    public ContactsFilter withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=last_name")
    public String lastName;
    public ContactsFilter withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=name")
    public String name;
    public ContactsFilter withName(String name) {
        this.name = name;
        return this;
    }
}
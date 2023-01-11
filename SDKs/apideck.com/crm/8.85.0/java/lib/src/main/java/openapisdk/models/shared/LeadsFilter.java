package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsFilter {
    @SpeakeasyMetadata("queryParam:name=email")
    public String email;
    public LeadsFilter withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=first_name")
    public String firstName;
    public LeadsFilter withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=last_name")
    public String lastName;
    public LeadsFilter withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=name")
    public String name;
    public LeadsFilter withName(String name) {
        this.name = name;
        return this;
    }
}
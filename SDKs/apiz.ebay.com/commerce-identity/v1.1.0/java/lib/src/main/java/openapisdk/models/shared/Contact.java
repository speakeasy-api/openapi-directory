package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Contact
 * The type that defines the fields for the information of the contact person for the account.
**/
public class Contact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public Contact withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public Contact withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}
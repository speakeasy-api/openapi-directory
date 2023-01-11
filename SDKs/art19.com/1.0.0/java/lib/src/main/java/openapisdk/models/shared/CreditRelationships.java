package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("person")
    public CreditRelationshipsPerson person;
    public CreditRelationships withPerson(CreditRelationshipsPerson person) {
        this.person = person;
        return this;
    }
}
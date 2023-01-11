package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactMethodsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactMethods")
    public ContactMethod[] contactMethods;
    public GetContactMethodsResult withContactMethods(ContactMethod[] contactMethods) {
        this.contactMethods = contactMethods;
        return this;
    }
}
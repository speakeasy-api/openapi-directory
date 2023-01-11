package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainContactRequest
 * The UpdateDomainContact request includes the following elements.
**/
public class UpdateDomainContactRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminContact")
    public ContactDetail adminContact;
    public UpdateDomainContactRequest withAdminContact(ContactDetail adminContact) {
        this.adminContact = adminContact;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public UpdateDomainContactRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistrantContact")
    public ContactDetail registrantContact;
    public UpdateDomainContactRequest withRegistrantContact(ContactDetail registrantContact) {
        this.registrantContact = registrantContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TechContact")
    public ContactDetail techContact;
    public UpdateDomainContactRequest withTechContact(ContactDetail techContact) {
        this.techContact = techContact;
        return this;
    }
}
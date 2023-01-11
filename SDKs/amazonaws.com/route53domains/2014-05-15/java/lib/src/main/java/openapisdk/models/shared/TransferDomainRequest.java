package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferDomainRequest
 * The TransferDomain request includes the following elements.
**/
public class TransferDomainRequest {
    @JsonProperty("AdminContact")
    public ContactDetail adminContact;
    public TransferDomainRequest withAdminContact(ContactDetail adminContact) {
        this.adminContact = adminContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthCode")
    public String authCode;
    public TransferDomainRequest withAuthCode(String authCode) {
        this.authCode = authCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoRenew")
    public Boolean autoRenew;
    public TransferDomainRequest withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public TransferDomainRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonProperty("DurationInYears")
    public Long durationInYears;
    public TransferDomainRequest withDurationInYears(Long durationInYears) {
        this.durationInYears = durationInYears;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdnLangCode")
    public String idnLangCode;
    public TransferDomainRequest withIdnLangCode(String idnLangCode) {
        this.idnLangCode = idnLangCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Nameservers")
    public Nameserver[] nameservers;
    public TransferDomainRequest withNameservers(Nameserver[] nameservers) {
        this.nameservers = nameservers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivacyProtectAdminContact")
    public Boolean privacyProtectAdminContact;
    public TransferDomainRequest withPrivacyProtectAdminContact(Boolean privacyProtectAdminContact) {
        this.privacyProtectAdminContact = privacyProtectAdminContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivacyProtectRegistrantContact")
    public Boolean privacyProtectRegistrantContact;
    public TransferDomainRequest withPrivacyProtectRegistrantContact(Boolean privacyProtectRegistrantContact) {
        this.privacyProtectRegistrantContact = privacyProtectRegistrantContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivacyProtectTechContact")
    public Boolean privacyProtectTechContact;
    public TransferDomainRequest withPrivacyProtectTechContact(Boolean privacyProtectTechContact) {
        this.privacyProtectTechContact = privacyProtectTechContact;
        return this;
    }
    @JsonProperty("RegistrantContact")
    public ContactDetail registrantContact;
    public TransferDomainRequest withRegistrantContact(ContactDetail registrantContact) {
        this.registrantContact = registrantContact;
        return this;
    }
    @JsonProperty("TechContact")
    public ContactDetail techContact;
    public TransferDomainRequest withTechContact(ContactDetail techContact) {
        this.techContact = techContact;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainContactPrivacyRequest
 * The UpdateDomainContactPrivacy request includes the following elements.
**/
public class UpdateDomainContactPrivacyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminPrivacy")
    public Boolean adminPrivacy;
    public UpdateDomainContactPrivacyRequest withAdminPrivacy(Boolean adminPrivacy) {
        this.adminPrivacy = adminPrivacy;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public UpdateDomainContactPrivacyRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegistrantPrivacy")
    public Boolean registrantPrivacy;
    public UpdateDomainContactPrivacyRequest withRegistrantPrivacy(Boolean registrantPrivacy) {
        this.registrantPrivacy = registrantPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TechPrivacy")
    public Boolean techPrivacy;
    public UpdateDomainContactPrivacyRequest withTechPrivacy(Boolean techPrivacy) {
        this.techPrivacy = techPrivacy;
        return this;
    }
}
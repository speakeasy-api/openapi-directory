package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodyLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("about")
    public String about;
    public PatchOrganizationRequestBodyLinks withAbout(String about) {
        this.about = about;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contact")
    public String contact;
    public PatchOrganizationRequestBodyLinks withContact(String contact) {
        this.contact = contact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public String privacy;
    public PatchOrganizationRequestBodyLinks withPrivacy(String privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("support")
    public String support;
    public PatchOrganizationRequestBodyLinks withSupport(String support) {
        this.support = support;
        return this;
    }
}
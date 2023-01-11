package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateInformationAboutPagesSiteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("https_enforced")
    public Boolean httpsEnforced;
    public ReposUpdateInformationAboutPagesSiteRequestBody withHttpsEnforced(Boolean httpsEnforced) {
        this.httpsEnforced = httpsEnforced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ReposUpdateInformationAboutPagesSiteRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum source;
    public ReposUpdateInformationAboutPagesSiteRequestBody withSource(ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum source) {
        this.source = source;
        return this;
    }
}
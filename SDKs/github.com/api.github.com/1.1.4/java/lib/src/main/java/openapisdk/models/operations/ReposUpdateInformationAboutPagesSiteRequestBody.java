package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateInformationAboutPagesSiteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cname")
    public String cname;
    public ReposUpdateInformationAboutPagesSiteRequestBody withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public ReposUpdateInformationAboutPagesSiteRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonProperty("source")
    public Object source;
    public ReposUpdateInformationAboutPagesSiteRequestBody withSource(Object source) {
        this.source = source;
        return this;
    }
}
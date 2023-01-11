package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicantWebsites {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApplicantWebsites withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ApplicantWebsitesTypeEnum type;
    public ApplicantWebsites withType(ApplicantWebsitesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ApplicantWebsites withUrl(String url) {
        this.url = url;
        return this;
    }
}
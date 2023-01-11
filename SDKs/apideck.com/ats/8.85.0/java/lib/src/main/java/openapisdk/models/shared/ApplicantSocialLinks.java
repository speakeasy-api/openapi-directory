package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicantSocialLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApplicantSocialLinks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ApplicantSocialLinks withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ApplicantSocialLinks withUrl(String url) {
        this.url = url;
        return this;
    }
}
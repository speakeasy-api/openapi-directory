package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Author {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public Author withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Author withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public Author withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orcid_id")
    public String orcidId;
    public Author withOrcidId(String orcidId) {
        this.orcidId = orcidId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_name")
    public String urlName;
    public Author withUrlName(String urlName) {
        this.urlName = urlName;
        return this;
    }
}
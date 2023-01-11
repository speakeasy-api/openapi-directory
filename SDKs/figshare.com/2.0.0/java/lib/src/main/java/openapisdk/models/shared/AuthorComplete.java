package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthorComplete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public AuthorComplete withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public AuthorComplete withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public AuthorComplete withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AuthorComplete withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_id")
    public Long institutionId;
    public AuthorComplete withInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public AuthorComplete withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Long isPublic;
    public AuthorComplete withIsPublic(Long isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public String jobTitle;
    public AuthorComplete withJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public AuthorComplete withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orcid_id")
    public String orcidId;
    public AuthorComplete withOrcidId(String orcidId) {
        this.orcidId = orcidId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_name")
    public String urlName;
    public AuthorComplete withUrlName(String urlName) {
        this.urlName = urlName;
        return this;
    }
}
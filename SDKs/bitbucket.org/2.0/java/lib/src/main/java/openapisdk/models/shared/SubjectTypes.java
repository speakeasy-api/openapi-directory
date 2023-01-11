package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubjectTypes
 * The mapping of resource/subject types pointing to their individual event types.
**/
public class SubjectTypes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public SubjectTypesRepository repository;
    public SubjectTypes withRepository(SubjectTypesRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public SubjectTypesTeam team;
    public SubjectTypes withTeam(SubjectTypesTeam team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public SubjectTypesUser user;
    public SubjectTypes withUser(SubjectTypesUser user) {
        this.user = user;
        return this;
    }
}
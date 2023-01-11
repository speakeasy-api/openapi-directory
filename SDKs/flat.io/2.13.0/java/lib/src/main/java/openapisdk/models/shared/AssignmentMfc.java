package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentMfc
 * A MusicFirst Classroom assignment
**/
public class AssignmentMfc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public AssignmentMfc withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssignmentMfc withId(String id) {
        this.id = id;
        return this;
    }
}
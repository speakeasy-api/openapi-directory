package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleClassroomCoursework
 * A coursework on Google Classroom
**/
public class GoogleClassroomCoursework {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public GoogleClassroomCoursework withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleClassroomCoursework withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public GoogleClassroomCoursework withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicId")
    public String topicId;
    public GoogleClassroomCoursework withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
}
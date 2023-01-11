package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentCreationGoogleClassroom
 * Google Classroom options for this assignment
**/
public class AssignmentCreationGoogleClassroom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicId")
    public String topicId;
    public AssignmentCreationGoogleClassroom withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
}
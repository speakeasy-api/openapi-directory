package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssessmentRunStateChange
 * Used as one of the elements of the <a>AssessmentRun</a> data type.
**/
public class AssessmentRunStateChange {
    @JsonProperty("state")
    public AssessmentRunStateEnum state;
    public AssessmentRunStateChange withState(AssessmentRunStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("stateChangedAt")
    public OffsetDateTime stateChangedAt;
    public AssessmentRunStateChange withStateChangedAt(OffsetDateTime stateChangedAt) {
        this.stateChangedAt = stateChangedAt;
        return this;
    }
}
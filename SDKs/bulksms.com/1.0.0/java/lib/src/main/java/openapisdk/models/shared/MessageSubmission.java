package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MessageSubmission
 * Identifies the submission.
 * 
**/
public class MessageSubmission {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public MessageSubmission withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public MessageSubmission withId(String id) {
        this.id = id;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StoryResponseDates
 * *Conditional*
**/
public class StoryResponseDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("due_at")
    public OffsetDateTime dueAt;
    public StoryResponseDates withDueAt(OffsetDateTime dueAt) {
        this.dueAt = dueAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_on")
    public LocalDate dueOn;
    public StoryResponseDates withDueOn(LocalDate dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public LocalDate startOn;
    public StoryResponseDates withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ScoutingObservation {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public ScoutingObservation withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("fieldIds")
    public String[] fieldIds;
    public ScoutingObservation withFieldIds(String[] fieldIds) {
        this.fieldIds = fieldIds;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ScoutingObservation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("location")
    public Object location;
    public ScoutingObservation withLocation(Object location) {
        this.location = location;
        return this;
    }
    @JsonProperty("locationDisplayColor")
    public ScoutingObservationLocationDisplayColorEnum locationDisplayColor;
    public ScoutingObservation withLocationDisplayColor(ScoutingObservationLocationDisplayColorEnum locationDisplayColor) {
        this.locationDisplayColor = locationDisplayColor;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public ScoutingObservation withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ScoutingObservation withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("status")
    public ScoutingObservationStatusEnum status;
    public ScoutingObservation withStatus(ScoutingObservationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("tags")
    public ScoutingTag[] tags;
    public ScoutingObservation withTags(ScoutingTag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("timespan")
    public ScoutingObservationTimespanEnum timespan;
    public ScoutingObservation withTimespan(ScoutingObservationTimespanEnum timespan) {
        this.timespan = timespan;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ScoutingObservation withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public ScoutingObservation withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
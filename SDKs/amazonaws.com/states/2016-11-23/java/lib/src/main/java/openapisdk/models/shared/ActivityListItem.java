package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ActivityListItem
 * Contains details about an activity.
**/
public class ActivityListItem {
    @JsonProperty("activityArn")
    public String activityArn;
    public ActivityListItem withActivityArn(String activityArn) {
        this.activityArn = activityArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ActivityListItem withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ActivityListItem withName(String name) {
        this.name = name;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateActivityOutput {
    @JsonProperty("activityArn")
    public String activityArn;
    public CreateActivityOutput withActivityArn(String activityArn) {
        this.activityArn = activityArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public CreateActivityOutput withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
}
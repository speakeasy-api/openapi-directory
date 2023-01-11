package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartExecutionOutput {
    @JsonProperty("executionArn")
    public String executionArn;
    public StartExecutionOutput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public StartExecutionOutput withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
}
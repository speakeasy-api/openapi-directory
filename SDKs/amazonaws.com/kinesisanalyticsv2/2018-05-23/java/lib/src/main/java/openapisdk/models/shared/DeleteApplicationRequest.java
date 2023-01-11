package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DeleteApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public DeleteApplicationRequest withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
}
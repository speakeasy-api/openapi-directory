package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateComponentVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public CreateComponentVersionResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("componentName")
    public String componentName;
    public CreateComponentVersionResponse withComponentName(String componentName) {
        this.componentName = componentName;
        return this;
    }
    @JsonProperty("componentVersion")
    public String componentVersion;
    public CreateComponentVersionResponse withComponentVersion(String componentVersion) {
        this.componentVersion = componentVersion;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTimestamp")
    public OffsetDateTime creationTimestamp;
    public CreateComponentVersionResponse withCreationTimestamp(OffsetDateTime creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonProperty("status")
    public CloudComponentStatus status;
    public CreateComponentVersionResponse withStatus(CloudComponentStatus status) {
        this.status = status;
        return this;
    }
}
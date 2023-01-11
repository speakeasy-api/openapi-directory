package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AutomatedDiscoveryInformation
 * Describes automated discovery.
**/
public class AutomatedDiscoveryInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastRunTime")
    public OffsetDateTime lastRunTime;
    public AutomatedDiscoveryInformation withLastRunTime(OffsetDateTime lastRunTime) {
        this.lastRunTime = lastRunTime;
        return this;
    }
}
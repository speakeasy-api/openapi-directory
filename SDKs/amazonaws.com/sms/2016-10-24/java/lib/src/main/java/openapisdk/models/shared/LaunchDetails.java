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
 * LaunchDetails
 * Details about the latest launch of an application.
**/
public class LaunchDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestLaunchTime")
    public OffsetDateTime latestLaunchTime;
    public LaunchDetails withLatestLaunchTime(OffsetDateTime latestLaunchTime) {
        this.latestLaunchTime = latestLaunchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackId")
    public String stackId;
    public LaunchDetails withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackName")
    public String stackName;
    public LaunchDetails withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
}
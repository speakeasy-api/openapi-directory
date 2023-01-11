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
 * SimulationJobSummary
 * Summary information for a simulation job.
**/
public class SimulationJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public SimulationJobSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceNames")
    public String[] dataSourceNames;
    public SimulationJobSummary withDataSourceNames(String[] dataSourceNames) {
        this.dataSourceNames = dataSourceNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public SimulationJobSummary withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimulationJobSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("robotApplicationNames")
    public String[] robotApplicationNames;
    public SimulationJobSummary withRobotApplicationNames(String[] robotApplicationNames) {
        this.robotApplicationNames = robotApplicationNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationApplicationNames")
    public String[] simulationApplicationNames;
    public SimulationJobSummary withSimulationApplicationNames(String[] simulationApplicationNames) {
        this.simulationApplicationNames = simulationApplicationNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SimulationJobStatusEnum status;
    public SimulationJobSummary withStatus(SimulationJobStatusEnum status) {
        this.status = status;
        return this;
    }
}
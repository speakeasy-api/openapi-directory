package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeStateMachineOutput {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public DescribeStateMachineOutput withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("definition")
    public String definition;
    public DescribeStateMachineOutput withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public DescribeStateMachineOutput withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DescribeStateMachineOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeStateMachineOutput withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public DescribeStateMachineOutput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StateMachineStatusEnum status;
    public DescribeStateMachineOutput withStatus(StateMachineStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracingConfiguration")
    public TracingConfiguration tracingConfiguration;
    public DescribeStateMachineOutput withTracingConfiguration(TracingConfiguration tracingConfiguration) {
        this.tracingConfiguration = tracingConfiguration;
        return this;
    }
    @JsonProperty("type")
    public StateMachineTypeEnum type;
    public DescribeStateMachineOutput withType(StateMachineTypeEnum type) {
        this.type = type;
        return this;
    }
}
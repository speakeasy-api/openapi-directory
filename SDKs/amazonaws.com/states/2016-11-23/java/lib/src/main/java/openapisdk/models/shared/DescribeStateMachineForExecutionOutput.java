package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeStateMachineForExecutionOutput {
    @JsonProperty("definition")
    public String definition;
    public DescribeStateMachineForExecutionOutput withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public DescribeStateMachineForExecutionOutput withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DescribeStateMachineForExecutionOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeStateMachineForExecutionOutput withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public DescribeStateMachineForExecutionOutput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracingConfiguration")
    public TracingConfiguration tracingConfiguration;
    public DescribeStateMachineForExecutionOutput withTracingConfiguration(TracingConfiguration tracingConfiguration) {
        this.tracingConfiguration = tracingConfiguration;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateDate")
    public OffsetDateTime updateDate;
    public DescribeStateMachineForExecutionOutput withUpdateDate(OffsetDateTime updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribedExecution
 * The details for an execution object.
**/
public class DescribedExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionId")
    public String executionId;
    public DescribedExecution withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionRole")
    public String executionRole;
    public DescribedExecution withExecutionRole(String executionRole) {
        this.executionRole = executionRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitialFileLocation")
    public FileLocation initialFileLocation;
    public DescribedExecution withInitialFileLocation(FileLocation initialFileLocation) {
        this.initialFileLocation = initialFileLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public DescribedExecution withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixProfile")
    public PosixProfile posixProfile;
    public DescribedExecution withPosixProfile(PosixProfile posixProfile) {
        this.posixProfile = posixProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Results")
    public ExecutionResults results;
    public DescribedExecution withResults(ExecutionResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceMetadata")
    public ServiceMetadata serviceMetadata;
    public DescribedExecution withServiceMetadata(ServiceMetadata serviceMetadata) {
        this.serviceMetadata = serviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ExecutionStatusEnum status;
    public DescribedExecution withStatus(ExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
}
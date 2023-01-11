package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscoverInputSchemaRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputProcessingConfiguration")
    public InputProcessingConfiguration inputProcessingConfiguration;
    public DiscoverInputSchemaRequest withInputProcessingConfiguration(InputProcessingConfiguration inputProcessingConfiguration) {
        this.inputProcessingConfiguration = inputProcessingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputStartingPositionConfiguration")
    public InputStartingPositionConfiguration inputStartingPositionConfiguration;
    public DiscoverInputSchemaRequest withInputStartingPositionConfiguration(InputStartingPositionConfiguration inputStartingPositionConfiguration) {
        this.inputStartingPositionConfiguration = inputStartingPositionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public DiscoverInputSchemaRequest withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Configuration")
    public S3Configuration s3Configuration;
    public DiscoverInputSchemaRequest withS3Configuration(S3Configuration s3Configuration) {
        this.s3Configuration = s3Configuration;
        return this;
    }
    @JsonProperty("ServiceExecutionRole")
    public String serviceExecutionRole;
    public DiscoverInputSchemaRequest withServiceExecutionRole(String serviceExecutionRole) {
        this.serviceExecutionRole = serviceExecutionRole;
        return this;
    }
}
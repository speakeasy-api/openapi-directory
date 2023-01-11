package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApplicationRequest
 * TBD
**/
public class CreateApplicationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationCode")
    public String applicationCode;
    public CreateApplicationRequest withApplicationCode(String applicationCode) {
        this.applicationCode = applicationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationDescription")
    public String applicationDescription;
    public CreateApplicationRequest withApplicationDescription(String applicationDescription) {
        this.applicationDescription = applicationDescription;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public CreateApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOption[] cloudWatchLoggingOptions;
    public CreateApplicationRequest withCloudWatchLoggingOptions(CloudWatchLoggingOption[] cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Inputs")
    public Input[] inputs;
    public CreateApplicationRequest withInputs(Input[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outputs")
    public Output[] outputs;
    public CreateApplicationRequest withOutputs(Output[] outputs) {
        this.outputs = outputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateApplicationRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
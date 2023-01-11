package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public CreateJobRequestBodyInput input;
    public CreateJobRequestBody withInput(CreateJobRequestBodyInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Inputs")
    public openapisdk.models.shared.JobInput[] inputs;
    public CreateJobRequestBody withInputs(openapisdk.models.shared.JobInput[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Output")
    public CreateJobRequestBodyOutput output;
    public CreateJobRequestBody withOutput(CreateJobRequestBodyOutput output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputKeyPrefix")
    public String outputKeyPrefix;
    public CreateJobRequestBody withOutputKeyPrefix(String outputKeyPrefix) {
        this.outputKeyPrefix = outputKeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Outputs")
    public openapisdk.models.shared.CreateJobOutput[] outputs;
    public CreateJobRequestBody withOutputs(openapisdk.models.shared.CreateJobOutput[] outputs) {
        this.outputs = outputs;
        return this;
    }
    @JsonProperty("PipelineId")
    public String pipelineId;
    public CreateJobRequestBody withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Playlists")
    public openapisdk.models.shared.CreateJobPlaylist[] playlists;
    public CreateJobRequestBody withPlaylists(openapisdk.models.shared.CreateJobPlaylist[] playlists) {
        this.playlists = playlists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserMetadata")
    public java.util.Map<String, String> userMetadata;
    public CreateJobRequestBody withUserMetadata(java.util.Map<String, String> userMetadata) {
        this.userMetadata = userMetadata;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteApplicationOutputRequest
 * <p/>
**/
public class DeleteApplicationOutputRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationOutputRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public DeleteApplicationOutputRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("OutputId")
    public String outputId;
    public DeleteApplicationOutputRequest withOutputId(String outputId) {
        this.outputId = outputId;
        return this;
    }
}
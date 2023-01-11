package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewFileResponse
 * Response object for preview file
**/
public class PreviewFileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public PreviewFile data;
    public PreviewFileResponse withData(PreviewFile data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public PreviewFileResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}
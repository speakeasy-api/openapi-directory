package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public GetImageResponse withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetImageResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}
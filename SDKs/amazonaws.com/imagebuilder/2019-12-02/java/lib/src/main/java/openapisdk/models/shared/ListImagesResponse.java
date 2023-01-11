package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersionList")
    public ImageVersion[] imageVersionList;
    public ListImagesResponse withImageVersionList(ImageVersion[] imageVersionList) {
        this.imageVersionList = imageVersionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ListImagesResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDownloadUrlForLayerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public GetDownloadUrlForLayerResponse withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerDigest")
    public String layerDigest;
    public GetDownloadUrlForLayerResponse withLayerDigest(String layerDigest) {
        this.layerDigest = layerDigest;
        return this;
    }
}
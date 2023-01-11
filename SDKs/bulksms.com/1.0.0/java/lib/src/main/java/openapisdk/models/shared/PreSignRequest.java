package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreSignRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileExtension")
    public String fileExtension;
    public PreSignRequest withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public String mediaType;
    public PreSignRequest withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
}
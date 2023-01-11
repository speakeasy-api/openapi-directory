package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextDetections")
    public TextDetection[] textDetections;
    public DetectTextResponse withTextDetections(TextDetection[] textDetections) {
        this.textDetections = textDetections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextModelVersion")
    public String textModelVersion;
    public DetectTextResponse withTextModelVersion(String textModelVersion) {
        this.textModelVersion = textModelVersion;
        return this;
    }
}
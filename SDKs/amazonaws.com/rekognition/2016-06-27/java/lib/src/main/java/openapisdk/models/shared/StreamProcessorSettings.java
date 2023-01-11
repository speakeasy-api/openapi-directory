package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamProcessorSettings
 * Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
**/
public class StreamProcessorSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceSearch")
    public FaceSearchSettings faceSearch;
    public StreamProcessorSettings withFaceSearch(FaceSearchSettings faceSearch) {
        this.faceSearch = faceSearch;
        return this;
    }
}
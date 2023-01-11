package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * JsonMappingParameters
 * Provides additional mapping information when JSON is the record format on the streaming source.
**/
public class JsonMappingParameters {
    @JsonProperty("RecordRowPath")
    public String recordRowPath;
    public JsonMappingParameters withRecordRowPath(String recordRowPath) {
        this.recordRowPath = recordRowPath;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UploadStatuses {
    @JsonProperty("results")
    public UploadStatus[] results;
    public UploadStatuses withResults(UploadStatus[] results) {
        this.results = results;
        return this;
    }
}
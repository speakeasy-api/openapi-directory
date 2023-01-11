package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAutoSnapshotRequest {
    @JsonProperty("date")
    public String date;
    public DeleteAutoSnapshotRequest withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public DeleteAutoSnapshotRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}
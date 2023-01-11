package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteImagePermissionsRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteImagePermissionsRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public DeleteImagePermissionsRequest withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}
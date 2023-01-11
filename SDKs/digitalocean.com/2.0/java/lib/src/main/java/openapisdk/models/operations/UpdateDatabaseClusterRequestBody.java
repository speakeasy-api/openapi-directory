package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDatabaseClusterRequestBody {
    @JsonProperty("region")
    public String region;
    public UpdateDatabaseClusterRequestBody withRegion(String region) {
        this.region = region;
        return this;
    }
}
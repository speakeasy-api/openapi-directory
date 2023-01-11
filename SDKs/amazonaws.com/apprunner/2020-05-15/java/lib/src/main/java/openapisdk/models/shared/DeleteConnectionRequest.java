package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConnectionRequest {
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public DeleteConnectionRequest withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
}
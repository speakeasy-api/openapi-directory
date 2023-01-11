package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConnectionInput {
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public DeleteConnectionInput withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
}
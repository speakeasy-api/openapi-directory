package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConnectionInput {
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public GetConnectionInput withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
}
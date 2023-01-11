package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConnectionResponse {
    @JsonProperty("Connection")
    public Connection connection;
    public CreateConnectionResponse withConnection(Connection connection) {
        this.connection = connection;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connection")
    public Connection connection;
    public GetConnectionResponse withConnection(Connection connection) {
        this.connection = connection;
        return this;
    }
}
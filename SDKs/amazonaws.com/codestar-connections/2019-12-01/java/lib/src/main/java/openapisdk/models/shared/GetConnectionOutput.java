package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connection")
    public Connection connection;
    public GetConnectionOutput withConnection(Connection connection) {
        this.connection = connection;
        return this;
    }
}
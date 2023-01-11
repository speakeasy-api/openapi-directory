package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestConnectionResponse
 * <p/>
**/
public class TestConnectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Connection")
    public Connection connection;
    public TestConnectionResponse withConnection(Connection connection) {
        this.connection = connection;
        return this;
    }
}
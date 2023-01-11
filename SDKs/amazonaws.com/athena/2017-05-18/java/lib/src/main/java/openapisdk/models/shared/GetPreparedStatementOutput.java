package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPreparedStatementOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreparedStatement")
    public PreparedStatement preparedStatement;
    public GetPreparedStatementOutput withPreparedStatement(PreparedStatement preparedStatement) {
        this.preparedStatement = preparedStatement;
        return this;
    }
}
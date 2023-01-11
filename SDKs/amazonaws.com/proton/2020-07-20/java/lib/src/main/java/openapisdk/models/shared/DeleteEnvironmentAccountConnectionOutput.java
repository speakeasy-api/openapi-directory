package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteEnvironmentAccountConnectionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public DeleteEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
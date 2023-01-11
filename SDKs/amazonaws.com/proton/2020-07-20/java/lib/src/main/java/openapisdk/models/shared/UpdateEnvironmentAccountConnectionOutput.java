package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEnvironmentAccountConnectionOutput {
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public UpdateEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
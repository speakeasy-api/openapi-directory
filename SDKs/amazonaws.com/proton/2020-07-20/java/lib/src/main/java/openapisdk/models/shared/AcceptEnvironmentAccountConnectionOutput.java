package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AcceptEnvironmentAccountConnectionOutput {
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public AcceptEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
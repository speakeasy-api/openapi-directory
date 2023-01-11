package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectEnvironmentAccountConnectionOutput {
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public RejectEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
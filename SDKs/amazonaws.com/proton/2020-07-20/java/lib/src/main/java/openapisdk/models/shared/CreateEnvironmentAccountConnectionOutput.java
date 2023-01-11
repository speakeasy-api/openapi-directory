package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentAccountConnectionOutput {
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public CreateEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
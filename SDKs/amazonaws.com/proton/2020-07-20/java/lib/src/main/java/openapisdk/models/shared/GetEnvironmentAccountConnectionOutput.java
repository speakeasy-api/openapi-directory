package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentAccountConnectionOutput {
    @JsonProperty("environmentAccountConnection")
    public EnvironmentAccountConnection environmentAccountConnection;
    public GetEnvironmentAccountConnectionOutput withEnvironmentAccountConnection(EnvironmentAccountConnection environmentAccountConnection) {
        this.environmentAccountConnection = environmentAccountConnection;
        return this;
    }
}
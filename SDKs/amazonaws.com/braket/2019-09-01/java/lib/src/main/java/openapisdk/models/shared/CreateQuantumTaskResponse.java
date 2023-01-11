package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateQuantumTaskResponse {
    @JsonProperty("quantumTaskArn")
    public String quantumTaskArn;
    public CreateQuantumTaskResponse withQuantumTaskArn(String quantumTaskArn) {
        this.quantumTaskArn = quantumTaskArn;
        return this;
    }
}
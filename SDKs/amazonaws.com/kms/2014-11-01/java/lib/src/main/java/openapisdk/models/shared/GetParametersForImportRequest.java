package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetParametersForImportRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public GetParametersForImportRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonProperty("WrappingAlgorithm")
    public AlgorithmSpecEnum wrappingAlgorithm;
    public GetParametersForImportRequest withWrappingAlgorithm(AlgorithmSpecEnum wrappingAlgorithm) {
        this.wrappingAlgorithm = wrappingAlgorithm;
        return this;
    }
    @JsonProperty("WrappingKeySpec")
    public WrappingKeySpecEnum wrappingKeySpec;
    public GetParametersForImportRequest withWrappingKeySpec(WrappingKeySpecEnum wrappingKeySpec) {
        this.wrappingKeySpec = wrappingKeySpec;
        return this;
    }
}
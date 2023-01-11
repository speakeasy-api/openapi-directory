package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateParallelDataRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateParallelDataRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateParallelDataRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public EncryptionKey encryptionKey;
    public CreateParallelDataRequest withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateParallelDataRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ParallelDataConfig")
    public ParallelDataConfig parallelDataConfig;
    public CreateParallelDataRequest withParallelDataConfig(ParallelDataConfig parallelDataConfig) {
        this.parallelDataConfig = parallelDataConfig;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReplicaRequestBodyInput {
    @JsonProperty("name")
    public String name;
    public CreateReplicaRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_network_uuid")
    public String privateNetworkUuid;
    public CreateReplicaRequestBodyInput withPrivateNetworkUuid(String privateNetworkUuid) {
        this.privateNetworkUuid = privateNetworkUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public CreateReplicaRequestBodyInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public CreateReplicaRequestBodyInput withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateReplicaRequestBodyInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}
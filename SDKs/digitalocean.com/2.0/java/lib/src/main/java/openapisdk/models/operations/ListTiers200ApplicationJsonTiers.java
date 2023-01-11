package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTiers200ApplicationJsonTiers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_seconds")
    public String buildSeconds;
    public ListTiers200ApplicationJsonTiers withBuildSeconds(String buildSeconds) {
        this.buildSeconds = buildSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egress_bandwidth_bytes")
    public String egressBandwidthBytes;
    public ListTiers200ApplicationJsonTiers withEgressBandwidthBytes(String egressBandwidthBytes) {
        this.egressBandwidthBytes = egressBandwidthBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListTiers200ApplicationJsonTiers withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public ListTiers200ApplicationJsonTiers withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage_bytes")
    public String storageBytes;
    public ListTiers200ApplicationJsonTiers withStorageBytes(String storageBytes) {
        this.storageBytes = storageBytes;
        return this;
    }
}
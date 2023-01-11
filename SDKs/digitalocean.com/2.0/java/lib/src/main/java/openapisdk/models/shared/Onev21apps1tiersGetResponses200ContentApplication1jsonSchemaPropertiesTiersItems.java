package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_seconds")
    public String buildSeconds;
    public Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems withBuildSeconds(String buildSeconds) {
        this.buildSeconds = buildSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egress_bandwidth_bytes")
    public String egressBandwidthBytes;
    public Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems withEgressBandwidthBytes(String egressBandwidthBytes) {
        this.egressBandwidthBytes = egressBandwidthBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage_bytes")
    public String storageBytes;
    public Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems withStorageBytes(String storageBytes) {
        this.storageBytes = storageBytes;
        return this;
    }
}
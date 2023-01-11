package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateServiceRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateServiceRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsConfig")
    public DnsConfig dnsConfig;
    public CreateServiceRequest withDnsConfig(DnsConfig dnsConfig) {
        this.dnsConfig = dnsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckConfig")
    public HealthCheckConfig healthCheckConfig;
    public CreateServiceRequest withHealthCheckConfig(HealthCheckConfig healthCheckConfig) {
        this.healthCheckConfig = healthCheckConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckCustomConfig")
    public HealthCheckCustomConfig healthCheckCustomConfig;
    public CreateServiceRequest withHealthCheckCustomConfig(HealthCheckCustomConfig healthCheckCustomConfig) {
        this.healthCheckCustomConfig = healthCheckCustomConfig;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateServiceRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamespaceId")
    public String namespaceId;
    public CreateServiceRequest withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateServiceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ServiceTypeOptionEnum type;
    public CreateServiceRequest withType(ServiceTypeOptionEnum type) {
        this.type = type;
        return this;
    }
}
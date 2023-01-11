package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainDetails
 * Information about an Amazon Elasticsearch Service domain.
**/
public class AwsElasticsearchDomainDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessPolicies")
    public String accessPolicies;
    public AwsElasticsearchDomainDetails withAccessPolicies(String accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainEndpointOptions")
    public AwsElasticsearchDomainDomainEndpointOptions domainEndpointOptions;
    public AwsElasticsearchDomainDetails withDomainEndpointOptions(AwsElasticsearchDomainDomainEndpointOptions domainEndpointOptions) {
        this.domainEndpointOptions = domainEndpointOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainId")
    public String domainId;
    public AwsElasticsearchDomainDetails withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public AwsElasticsearchDomainDetails withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticsearchClusterConfig")
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails elasticsearchClusterConfig;
    public AwsElasticsearchDomainDetails withElasticsearchClusterConfig(AwsElasticsearchDomainElasticsearchClusterConfigDetails elasticsearchClusterConfig) {
        this.elasticsearchClusterConfig = elasticsearchClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticsearchVersion")
    public String elasticsearchVersion;
    public AwsElasticsearchDomainDetails withElasticsearchVersion(String elasticsearchVersion) {
        this.elasticsearchVersion = elasticsearchVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAtRestOptions")
    public AwsElasticsearchDomainEncryptionAtRestOptions encryptionAtRestOptions;
    public AwsElasticsearchDomainDetails withEncryptionAtRestOptions(AwsElasticsearchDomainEncryptionAtRestOptions encryptionAtRestOptions) {
        this.encryptionAtRestOptions = encryptionAtRestOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public String endpoint;
    public AwsElasticsearchDomainDetails withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoints")
    public java.util.Map<String, String> endpoints;
    public AwsElasticsearchDomainDetails withEndpoints(java.util.Map<String, String> endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogPublishingOptions")
    public AwsElasticsearchDomainLogPublishingOptions logPublishingOptions;
    public AwsElasticsearchDomainDetails withLogPublishingOptions(AwsElasticsearchDomainLogPublishingOptions logPublishingOptions) {
        this.logPublishingOptions = logPublishingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeToNodeEncryptionOptions")
    public AwsElasticsearchDomainNodeToNodeEncryptionOptions nodeToNodeEncryptionOptions;
    public AwsElasticsearchDomainDetails withNodeToNodeEncryptionOptions(AwsElasticsearchDomainNodeToNodeEncryptionOptions nodeToNodeEncryptionOptions) {
        this.nodeToNodeEncryptionOptions = nodeToNodeEncryptionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceSoftwareOptions")
    public AwsElasticsearchDomainServiceSoftwareOptions serviceSoftwareOptions;
    public AwsElasticsearchDomainDetails withServiceSoftwareOptions(AwsElasticsearchDomainServiceSoftwareOptions serviceSoftwareOptions) {
        this.serviceSoftwareOptions = serviceSoftwareOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VPCOptions")
    public AwsElasticsearchDomainVpcOptions vpcOptions;
    public AwsElasticsearchDomainDetails withVpcOptions(AwsElasticsearchDomainVpcOptions vpcOptions) {
        this.vpcOptions = vpcOptions;
        return this;
    }
}
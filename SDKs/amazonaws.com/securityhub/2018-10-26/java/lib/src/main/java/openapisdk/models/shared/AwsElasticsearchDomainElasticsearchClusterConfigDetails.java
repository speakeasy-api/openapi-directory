package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainElasticsearchClusterConfigDetails
 * details about the configuration of an Elasticsearch cluster.
**/
public class AwsElasticsearchDomainElasticsearchClusterConfigDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedMasterCount")
    public Long dedicatedMasterCount;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withDedicatedMasterCount(Long dedicatedMasterCount) {
        this.dedicatedMasterCount = dedicatedMasterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedMasterEnabled")
    public Boolean dedicatedMasterEnabled;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withDedicatedMasterEnabled(Boolean dedicatedMasterEnabled) {
        this.dedicatedMasterEnabled = dedicatedMasterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DedicatedMasterType")
    public String dedicatedMasterType;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withDedicatedMasterType(String dedicatedMasterType) {
        this.dedicatedMasterType = dedicatedMasterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceCount")
    public Long instanceCount;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withInstanceCount(Long instanceCount) {
        this.instanceCount = instanceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceType")
    public String instanceType;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZoneAwarenessConfig")
    public AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails zoneAwarenessConfig;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withZoneAwarenessConfig(AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails zoneAwarenessConfig) {
        this.zoneAwarenessConfig = zoneAwarenessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZoneAwarenessEnabled")
    public Boolean zoneAwarenessEnabled;
    public AwsElasticsearchDomainElasticsearchClusterConfigDetails withZoneAwarenessEnabled(Boolean zoneAwarenessEnabled) {
        this.zoneAwarenessEnabled = zoneAwarenessEnabled;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails
 * Configuration options for zone awareness.
**/
public class AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AvailabilityZoneCount")
    public Long availabilityZoneCount;
    public AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails withAvailabilityZoneCount(Long availabilityZoneCount) {
        this.availabilityZoneCount = availabilityZoneCount;
        return this;
    }
}
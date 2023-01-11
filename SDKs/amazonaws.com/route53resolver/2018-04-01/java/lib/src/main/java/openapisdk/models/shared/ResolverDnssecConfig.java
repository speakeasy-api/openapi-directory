package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolverDnssecConfig
 * A complex type that contains information about a configuration for DNSSEC validation.
**/
public class ResolverDnssecConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ResolverDnssecConfig withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerId")
    public String ownerId;
    public ResolverDnssecConfig withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public ResolverDnssecConfig withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationStatus")
    public ResolverDnssecValidationStatusEnum validationStatus;
    public ResolverDnssecConfig withValidationStatus(ResolverDnssecValidationStatusEnum validationStatus) {
        this.validationStatus = validationStatus;
        return this;
    }
}
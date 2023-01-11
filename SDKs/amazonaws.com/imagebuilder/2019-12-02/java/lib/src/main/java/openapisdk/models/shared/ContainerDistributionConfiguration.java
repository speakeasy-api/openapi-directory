package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContainerDistributionConfiguration
 * Container distribution settings for encryption, licensing, and sharing in a specific Region.
**/
public class ContainerDistributionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerTags")
    public String[] containerTags;
    public ContainerDistributionConfiguration withContainerTags(String[] containerTags) {
        this.containerTags = containerTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ContainerDistributionConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("targetRepository")
    public TargetContainerRepository targetRepository;
    public ContainerDistributionConfiguration withTargetRepository(TargetContainerRepository targetRepository) {
        this.targetRepository = targetRepository;
        return this;
    }
}
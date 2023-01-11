package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
 * A ulimit to set in the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HardLimit")
    public Long hardLimit;
    public AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails withHardLimit(Long hardLimit) {
        this.hardLimit = hardLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftLimit")
    public Long softLimit;
    public AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails withSoftLimit(Long softLimit) {
        this.softLimit = softLimit;
        return this;
    }
}
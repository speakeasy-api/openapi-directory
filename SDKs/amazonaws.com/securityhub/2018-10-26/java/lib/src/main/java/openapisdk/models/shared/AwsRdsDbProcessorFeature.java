package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbProcessorFeature
 * A processor feature.
**/
public class AwsRdsDbProcessorFeature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AwsRdsDbProcessorFeature withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AwsRdsDbProcessorFeature withValue(String value) {
        this.value = value;
        return this;
    }
}
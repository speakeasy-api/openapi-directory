package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDataIdentifiersDetections
 * The list of detected instances of sensitive data.
**/
public class CustomDataIdentifiersDetections {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public CustomDataIdentifiersDetections withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public CustomDataIdentifiersDetections withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CustomDataIdentifiersDetections withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Occurrences")
    public Occurrences occurrences;
    public CustomDataIdentifiersDetections withOccurrences(Occurrences occurrences) {
        this.occurrences = occurrences;
        return this;
    }
}
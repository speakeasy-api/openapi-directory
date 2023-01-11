package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeOperations
 * Information about the file operation conflicts in a merge operation.
**/
public class MergeOperations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public ChangeTypeEnumEnum destination;
    public MergeOperations withDestination(ChangeTypeEnumEnum destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ChangeTypeEnumEnum source;
    public MergeOperations withSource(ChangeTypeEnumEnum source) {
        this.source = source;
        return this;
    }
}
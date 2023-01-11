package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IsBinaryFile
 * Information about whether a file is binary or textual in a merge or pull request operation.
**/
public class IsBinaryFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public Boolean base;
    public IsBinaryFile withBase(Boolean base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Boolean destination;
    public IsBinaryFile withDestination(Boolean destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Boolean source;
    public IsBinaryFile withSource(Boolean source) {
        this.source = source;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileSizes
 * Information about the size of files in a merge or pull request.
**/
public class FileSizes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public Long base;
    public FileSizes withBase(Long base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public Long destination;
    public FileSizes withDestination(Long destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Long source;
    public FileSizes withSource(Long source) {
        this.source = source;
        return this;
    }
}
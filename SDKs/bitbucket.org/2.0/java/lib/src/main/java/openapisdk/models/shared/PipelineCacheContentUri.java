package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineCacheContentUri
 * A representation of the location of pipeline cache content.
**/
public class PipelineCacheContentUri {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PipelineCacheContentUri withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
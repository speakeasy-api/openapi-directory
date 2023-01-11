package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessLog
 * An object that represents the access logging information for a virtual node.
**/
public class AccessLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public FileAccessLog file;
    public AccessLog withFile(FileAccessLog file) {
        this.file = file;
        return this;
    }
}
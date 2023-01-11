package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileAccessLog
 * An object that represents an access log file.
**/
public class FileAccessLog {
    @JsonProperty("path")
    public String path;
    public FileAccessLog withPath(String path) {
        this.path = path;
        return this;
    }
}
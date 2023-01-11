package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * Returns information about the location of a change or comment in the comparison between two commits or a pull request.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePath")
    public String filePath;
    public Location withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePosition")
    public Long filePosition;
    public Location withFilePosition(Long filePosition) {
        this.filePosition = filePosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeFileVersion")
    public RelativeFileVersionEnumEnum relativeFileVersion;
    public Location withRelativeFileVersion(RelativeFileVersionEnumEnum relativeFileVersion) {
        this.relativeFileVersion = relativeFileVersion;
        return this;
    }
}
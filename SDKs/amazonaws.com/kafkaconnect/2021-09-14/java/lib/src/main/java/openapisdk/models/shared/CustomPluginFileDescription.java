package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomPluginFileDescription
 * Details about a custom plugin file.
**/
public class CustomPluginFileDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileMd5")
    public String fileMd5;
    public CustomPluginFileDescription withFileMd5(String fileMd5) {
        this.fileMd5 = fileMd5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public Long fileSize;
    public CustomPluginFileDescription withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
}
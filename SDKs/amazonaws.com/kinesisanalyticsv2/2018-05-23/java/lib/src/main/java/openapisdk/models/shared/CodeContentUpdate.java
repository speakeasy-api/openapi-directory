package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeContentUpdate
 * Describes an update to the code of an application. Not supported for Apache Zeppelin.
**/
public class CodeContentUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ContentLocationUpdate")
    public S3ContentLocationUpdate s3ContentLocationUpdate;
    public CodeContentUpdate withS3ContentLocationUpdate(S3ContentLocationUpdate s3ContentLocationUpdate) {
        this.s3ContentLocationUpdate = s3ContentLocationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextContentUpdate")
    public String textContentUpdate;
    public CodeContentUpdate withTextContentUpdate(String textContentUpdate) {
        this.textContentUpdate = textContentUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ZipFileContentUpdate")
    public String zipFileContentUpdate;
    public CodeContentUpdate withZipFileContentUpdate(String zipFileContentUpdate) {
        this.zipFileContentUpdate = zipFileContentUpdate;
        return this;
    }
}
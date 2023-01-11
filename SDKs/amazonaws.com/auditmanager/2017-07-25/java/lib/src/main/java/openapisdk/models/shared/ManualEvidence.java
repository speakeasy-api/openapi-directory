package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManualEvidence
 *  Evidence that is uploaded to Audit Manager manually. 
**/
public class ManualEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3ResourcePath")
    public String s3ResourcePath;
    public ManualEvidence withS3ResourcePath(String s3ResourcePath) {
        this.s3ResourcePath = s3ResourcePath;
        return this;
    }
}
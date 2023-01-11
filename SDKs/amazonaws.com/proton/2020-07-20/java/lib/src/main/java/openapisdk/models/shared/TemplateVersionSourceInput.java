package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateVersionSourceInput
 * Template version source data.
**/
public class TemplateVersionSourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3")
    public S3ObjectSource s3;
    public TemplateVersionSourceInput withS3(S3ObjectSource s3) {
        this.s3 = s3;
        return this;
    }
}
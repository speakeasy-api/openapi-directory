package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingSource
 * The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
**/
public class FindingSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public FindingSourceDetail detail;
    public FindingSource withDetail(FindingSourceDetail detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("type")
    public FindingSourceTypeEnum type;
    public FindingSource withType(FindingSourceTypeEnum type) {
        this.type = type;
        return this;
    }
}
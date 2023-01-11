package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingSourceDetail
 * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
**/
public class FindingSourceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessPointArn")
    public String accessPointArn;
    public FindingSourceDetail withAccessPointArn(String accessPointArn) {
        this.accessPointArn = accessPointArn;
        return this;
    }
}
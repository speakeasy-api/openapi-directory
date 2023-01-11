package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagCriterionPairForJob
 *  <p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
**/
public class TagCriterionPairForJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TagCriterionPairForJob withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public TagCriterionPairForJob withValue(String value) {
        this.value = value;
        return this;
    }
}
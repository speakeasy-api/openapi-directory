package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeImagesFilter
 * An object representing a filter on a <a>DescribeImages</a> operation.
**/
public class DescribeImagesFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagStatus")
    public TagStatusEnum tagStatus;
    public DescribeImagesFilter withTagStatus(TagStatusEnum tagStatus) {
        this.tagStatus = tagStatus;
        return this;
    }
}
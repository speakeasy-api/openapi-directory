package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListImagesFilter
 * An object representing a filter on a <a>ListImages</a> operation.
**/
public class ListImagesFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagStatus")
    public TagStatusEnum tagStatus;
    public ListImagesFilter withTagStatus(TagStatusEnum tagStatus) {
        this.tagStatus = tagStatus;
        return this;
    }
}
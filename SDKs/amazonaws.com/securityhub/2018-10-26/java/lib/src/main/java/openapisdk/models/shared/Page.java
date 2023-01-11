package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Page
 * An occurrence of sensitive data in an Adobe Portable Document Format (PDF) file.
**/
public class Page {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineRange")
    public Range lineRange;
    public Page withLineRange(Range lineRange) {
        this.lineRange = lineRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OffsetRange")
    public Range offsetRange;
    public Page withOffsetRange(Range offsetRange) {
        this.offsetRange = offsetRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Long pageNumber;
    public Page withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
}
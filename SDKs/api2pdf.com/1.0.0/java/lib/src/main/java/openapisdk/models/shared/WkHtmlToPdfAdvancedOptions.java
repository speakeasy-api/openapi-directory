package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WkHtmlToPdfAdvancedOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public String orientation;
    public WkHtmlToPdfAdvancedOptions withOrientation(String orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public String pageSize;
    public WkHtmlToPdfAdvancedOptions withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}
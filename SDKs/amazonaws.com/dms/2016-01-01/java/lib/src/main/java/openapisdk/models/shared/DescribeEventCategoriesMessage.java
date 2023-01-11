package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventCategoriesMessage
 * <p/>
**/
public class DescribeEventCategoriesMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public DescribeEventCategoriesMessage withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceType")
    public String sourceType;
    public DescribeEventCategoriesMessage withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
}
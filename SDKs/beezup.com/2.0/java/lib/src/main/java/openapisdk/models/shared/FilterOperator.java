package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterOperator
 * The filter operator
**/
public class FilterOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedChannelColumnDataType")
    public FilterOperatorDataTypeEnum expectedChannelColumnDataType;
    public FilterOperator withExpectedChannelColumnDataType(FilterOperatorDataTypeEnum expectedChannelColumnDataType) {
        this.expectedChannelColumnDataType = expectedChannelColumnDataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedValueDataType")
    public FilterOperatorDataTypeEnum expectedValueDataType;
    public FilterOperator withExpectedValueDataType(FilterOperatorDataTypeEnum expectedValueDataType) {
        this.expectedValueDataType = expectedValueDataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FilterOperator withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueRequired")
    public Boolean valueRequired;
    public FilterOperator withValueRequired(Boolean valueRequired) {
        this.valueRequired = valueRequired;
        return this;
    }
}
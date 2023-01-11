package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SortCriterion
 * Specifies a field to sort by and a sort order.
**/
public class SortCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldName")
    public String fieldName;
    public SortCriterion withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public SortEnum sort;
    public SortCriterion withSort(SortEnum sort) {
        this.sort = sort;
        return this;
    }
}
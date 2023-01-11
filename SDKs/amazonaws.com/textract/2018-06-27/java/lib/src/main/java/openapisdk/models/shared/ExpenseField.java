package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpenseField
 * Breakdown of detected information, seperated into the catagories Type, LableDetection, and ValueDetection
**/
public class ExpenseField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelDetection")
    public ExpenseDetection labelDetection;
    public ExpenseField withLabelDetection(ExpenseDetection labelDetection) {
        this.labelDetection = labelDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Long pageNumber;
    public ExpenseField withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ExpenseType type;
    public ExpenseField withType(ExpenseType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValueDetection")
    public ExpenseDetection valueDetection;
    public ExpenseField withValueDetection(ExpenseDetection valueDetection) {
        this.valueDetection = valueDetection;
        return this;
    }
}
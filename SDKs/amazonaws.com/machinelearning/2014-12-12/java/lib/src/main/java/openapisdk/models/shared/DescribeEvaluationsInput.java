package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEvaluationsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EQ")
    public String eq;
    public DescribeEvaluationsInput withEq(String eq) {
        this.eq = eq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterVariable")
    public EvaluationFilterVariableEnum filterVariable;
    public DescribeEvaluationsInput withFilterVariable(EvaluationFilterVariableEnum filterVariable) {
        this.filterVariable = filterVariable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GE")
    public String ge;
    public DescribeEvaluationsInput withGe(String ge) {
        this.ge = ge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GT")
    public String gt;
    public DescribeEvaluationsInput withGt(String gt) {
        this.gt = gt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LE")
    public String le;
    public DescribeEvaluationsInput withLe(String le) {
        this.le = le;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LT")
    public String lt;
    public DescribeEvaluationsInput withLt(String lt) {
        this.lt = lt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeEvaluationsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NE")
    public String ne;
    public DescribeEvaluationsInput withNe(String ne) {
        this.ne = ne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeEvaluationsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public DescribeEvaluationsInput withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public SortOrderEnum sortOrder;
    public DescribeEvaluationsInput withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}
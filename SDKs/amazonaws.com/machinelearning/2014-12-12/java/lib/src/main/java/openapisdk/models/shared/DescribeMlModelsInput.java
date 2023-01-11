package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeMlModelsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EQ")
    public String eq;
    public DescribeMlModelsInput withEq(String eq) {
        this.eq = eq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterVariable")
    public MlModelFilterVariableEnum filterVariable;
    public DescribeMlModelsInput withFilterVariable(MlModelFilterVariableEnum filterVariable) {
        this.filterVariable = filterVariable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GE")
    public String ge;
    public DescribeMlModelsInput withGe(String ge) {
        this.ge = ge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GT")
    public String gt;
    public DescribeMlModelsInput withGt(String gt) {
        this.gt = gt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LE")
    public String le;
    public DescribeMlModelsInput withLe(String le) {
        this.le = le;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LT")
    public String lt;
    public DescribeMlModelsInput withLt(String lt) {
        this.lt = lt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeMlModelsInput withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NE")
    public String ne;
    public DescribeMlModelsInput withNe(String ne) {
        this.ne = ne;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeMlModelsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public DescribeMlModelsInput withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortOrder")
    public SortOrderEnum sortOrder;
    public DescribeMlModelsInput withSortOrder(SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}
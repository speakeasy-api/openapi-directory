package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchParametersResponse {
    @JsonProperty("example")
    public String example;
    public SearchParametersResponse withExample(String example) {
        this.example = example;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public SearchParametersResponse withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("paramname")
    public String paramname;
    public SearchParametersResponse withParamname(String paramname) {
        this.paramname = paramname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuelist")
    public Object valuelist;
    public SearchParametersResponse withValuelist(Object valuelist) {
        this.valuelist = valuelist;
        return this;
    }
}
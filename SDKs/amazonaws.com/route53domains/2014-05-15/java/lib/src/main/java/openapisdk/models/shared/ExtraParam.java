package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExtraParam
 * ExtraParam includes the following elements.
**/
public class ExtraParam {
    @JsonProperty("Name")
    public ExtraParamNameEnum name;
    public ExtraParam withName(ExtraParamNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public ExtraParam withValue(String value) {
        this.value = value;
        return this;
    }
}
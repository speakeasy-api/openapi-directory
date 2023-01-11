package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BeezUpCommonUserErrorMessageArguments {
    @JsonProperty("name")
    public String name;
    public BeezUpCommonUserErrorMessageArguments withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public BeezUpCommonUserErrorMessageArguments withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}
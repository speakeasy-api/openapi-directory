package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NameValueList
 * This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
**/
public class NameValueList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NameValueList withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public NameValueList withValue(String value) {
        this.value = value;
        return this;
    }
}
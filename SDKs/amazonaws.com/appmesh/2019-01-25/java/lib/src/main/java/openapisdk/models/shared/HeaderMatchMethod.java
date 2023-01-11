package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeaderMatchMethod
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
**/
public class HeaderMatchMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public HeaderMatchMethod withExact(String exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public HeaderMatchMethod withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public MatchRange range;
    public HeaderMatchMethod withRange(MatchRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public HeaderMatchMethod withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public HeaderMatchMethod withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcMetadataMatchMethod
 * An object representing the method header to be matched.
**/
public class GrpcMetadataMatchMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public GrpcMetadataMatchMethod withExact(String exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public GrpcMetadataMatchMethod withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public MatchRange range;
    public GrpcMetadataMatchMethod withRange(MatchRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public GrpcMetadataMatchMethod withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public GrpcMetadataMatchMethod withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}
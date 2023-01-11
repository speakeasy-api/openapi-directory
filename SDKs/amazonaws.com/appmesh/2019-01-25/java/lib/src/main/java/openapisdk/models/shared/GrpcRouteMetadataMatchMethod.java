package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrpcRouteMetadataMatchMethod
 * An object that represents the match method. Specify one of the match values.
**/
public class GrpcRouteMetadataMatchMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exact")
    public String exact;
    public GrpcRouteMetadataMatchMethod withExact(String exact) {
        this.exact = exact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public GrpcRouteMetadataMatchMethod withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public MatchRange range;
    public GrpcRouteMetadataMatchMethod withRange(MatchRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public String regex;
    public GrpcRouteMetadataMatchMethod withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public GrpcRouteMetadataMatchMethod withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}
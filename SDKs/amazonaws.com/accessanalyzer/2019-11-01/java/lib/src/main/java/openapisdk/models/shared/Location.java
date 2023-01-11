package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Location
 * A location in a policy that is represented as a path through the JSON representation and a corresponding span.
**/
public class Location {
    @JsonProperty("path")
    public PathElement[] path;
    public Location withPath(PathElement[] path) {
        this.path = path;
        return this;
    }
    @JsonProperty("span")
    public Span span;
    public Location withSpan(Span span) {
        this.span = span;
        return this;
    }
}
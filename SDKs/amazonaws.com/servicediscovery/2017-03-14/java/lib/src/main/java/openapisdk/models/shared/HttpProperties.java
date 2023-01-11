package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpProperties
 * A complex type that contains the name of an HTTP namespace.
**/
public class HttpProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpName")
    public String httpName;
    public HttpProperties withHttpName(String httpName) {
        this.httpName = httpName;
        return this;
    }
}
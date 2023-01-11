package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDomainsRequest
 * The ListDomains request includes the following elements.
**/
public class ListDomainsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListDomainsRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxItems")
    public Long maxItems;
    public ListDomainsRequest withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}
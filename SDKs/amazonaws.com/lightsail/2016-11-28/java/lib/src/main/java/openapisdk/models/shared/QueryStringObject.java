package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryStringObject
 * <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>
**/
public class QueryStringObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public Boolean option;
    public QueryStringObject withOption(Boolean option) {
        this.option = option;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryStringsAllowList")
    public String[] queryStringsAllowList;
    public QueryStringObject withQueryStringsAllowList(String[] queryStringsAllowList) {
        this.queryStringsAllowList = queryStringsAllowList;
        return this;
    }
}
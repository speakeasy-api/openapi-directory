package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAlertPolicies200ApplicationJsonMeta
 * Information about the response itself.
**/
public class ListAlertPolicies200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public ListAlertPolicies200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}
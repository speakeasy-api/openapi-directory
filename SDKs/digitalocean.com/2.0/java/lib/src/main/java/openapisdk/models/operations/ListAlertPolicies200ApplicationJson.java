package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAlertPolicies200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAlertPolicies200ApplicationJsonLinks links;
    public ListAlertPolicies200ApplicationJson withLinks(ListAlertPolicies200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAlertPolicies200ApplicationJsonMeta meta;
    public ListAlertPolicies200ApplicationJson withMeta(ListAlertPolicies200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("policies")
    public ListAlertPolicies200ApplicationJsonPolicies[] policies;
    public ListAlertPolicies200ApplicationJson withPolicies(ListAlertPolicies200ApplicationJsonPolicies[] policies) {
        this.policies = policies;
        return this;
    }
}
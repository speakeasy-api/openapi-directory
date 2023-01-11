package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPolicyPrincipalsResponse
 * The output from the ListPolicyPrincipals operation.
**/
public class ListPolicyPrincipalsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListPolicyPrincipalsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principals")
    public String[] principals;
    public ListPolicyPrincipalsResponse withPrincipals(String[] principals) {
        this.principals = principals;
        return this;
    }
}
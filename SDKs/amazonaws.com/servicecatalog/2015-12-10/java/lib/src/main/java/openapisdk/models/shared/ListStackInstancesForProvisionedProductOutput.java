package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListStackInstancesForProvisionedProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListStackInstancesForProvisionedProductOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackInstances")
    public StackInstance[] stackInstances;
    public ListStackInstancesForProvisionedProductOutput withStackInstances(StackInstance[] stackInstances) {
        this.stackInstances = stackInstances;
        return this;
    }
}
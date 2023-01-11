package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualServiceBackend
 * An object that represents a virtual service backend for a virtual node.
**/
public class VirtualServiceBackend {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientPolicy")
    public ClientPolicy clientPolicy;
    public VirtualServiceBackend withClientPolicy(ClientPolicy clientPolicy) {
        this.clientPolicy = clientPolicy;
        return this;
    }
    @JsonProperty("virtualServiceName")
    public String virtualServiceName;
    public VirtualServiceBackend withVirtualServiceName(String virtualServiceName) {
        this.virtualServiceName = virtualServiceName;
        return this;
    }
}
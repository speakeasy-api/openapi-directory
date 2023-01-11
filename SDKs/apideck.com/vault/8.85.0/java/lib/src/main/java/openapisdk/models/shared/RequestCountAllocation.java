package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequestCountAllocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy")
    public Double proxy;
    public RequestCountAllocation withProxy(Double proxy) {
        this.proxy = proxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unify")
    public Double unify;
    public RequestCountAllocation withUnify(Double unify) {
        this.unify = unify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vault")
    public Double vault;
    public RequestCountAllocation withVault(Double vault) {
        this.vault = vault;
        return this;
    }
}
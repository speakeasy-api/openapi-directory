package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public AppResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public AppResponse withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apnsUseSandboxEndpoint")
    public Boolean apnsUseSandboxEndpoint;
    public AppResponse withApnsUseSandboxEndpoint(Boolean apnsUseSandboxEndpoint) {
        this.apnsUseSandboxEndpoint = apnsUseSandboxEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AppResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AppResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AppResponseStatusEnum status;
    public AppResponse withStatus(AppResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public AppResponse withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiRequestResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public ApiRequestResourceItem item;
    public ApiRequestResource withItem(ApiRequestResourceItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemVersion")
    public Long itemVersion;
    public ApiRequestResource withItemVersion(Long itemVersion) {
        this.itemVersion = itemVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ApiRequestResourceTypeEnum type;
    public ApiRequestResource withType(ApiRequestResourceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vault")
    public ApiRequestResourceVault vault;
    public ApiRequestResource withVault(ApiRequestResourceVault vault) {
        this.vault = vault;
        return this;
    }
}
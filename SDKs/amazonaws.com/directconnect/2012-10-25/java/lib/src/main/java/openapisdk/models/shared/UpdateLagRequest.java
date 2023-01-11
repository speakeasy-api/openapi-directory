package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLagRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionMode")
    public String encryptionMode;
    public UpdateLagRequest withEncryptionMode(String encryptionMode) {
        this.encryptionMode = encryptionMode;
        return this;
    }
    @JsonProperty("lagId")
    public String lagId;
    public UpdateLagRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lagName")
    public String lagName;
    public UpdateLagRequest withLagName(String lagName) {
        this.lagName = lagName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumLinks")
    public Long minimumLinks;
    public UpdateLagRequest withMinimumLinks(Long minimumLinks) {
        this.minimumLinks = minimumLinks;
        return this;
    }
}
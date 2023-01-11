package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PagesHttpsCertificate {
    @JsonProperty("description")
    public String description;
    public PagesHttpsCertificate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("domains")
    public Object[] domains;
    public PagesHttpsCertificate withDomains(Object[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_at")
    public LocalDate expiresAt;
    public PagesHttpsCertificate withExpiresAt(LocalDate expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonProperty("state")
    public PagesHttpsCertificateStateEnum state;
    public PagesHttpsCertificate withState(PagesHttpsCertificateStateEnum state) {
        this.state = state;
        return this;
    }
}
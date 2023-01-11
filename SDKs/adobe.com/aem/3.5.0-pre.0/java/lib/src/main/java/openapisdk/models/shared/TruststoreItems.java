package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TruststoreItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public TruststoreItems withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryType")
    public String entryType;
    public TruststoreItems withEntryType(String entryType) {
        this.entryType = entryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public TruststoreItems withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notAfter")
    public String notAfter;
    public TruststoreItems withNotAfter(String notAfter) {
        this.notAfter = notAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notBefore")
    public String notBefore;
    public TruststoreItems withNotBefore(String notBefore) {
        this.notBefore = notBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public Long serialNumber;
    public TruststoreItems withSerialNumber(Long serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public TruststoreItems withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}
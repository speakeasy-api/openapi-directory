package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainValidationRecord
 * Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
**/
public class DomainValidationRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public DomainValidationRecord withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceRecord")
    public ResourceRecord resourceRecord;
    public DomainValidationRecord withResourceRecord(ResourceRecord resourceRecord) {
        this.resourceRecord = resourceRecord;
        return this;
    }
}
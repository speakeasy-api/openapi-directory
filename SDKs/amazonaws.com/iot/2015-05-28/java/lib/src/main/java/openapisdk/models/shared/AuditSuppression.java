package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AuditSuppression
 *  Filters out specific findings of a Device Defender audit. 
**/
public class AuditSuppression {
    @JsonProperty("checkName")
    public String checkName;
    public AuditSuppression withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AuditSuppression withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;
    public AuditSuppression withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonProperty("resourceIdentifier")
    public ResourceIdentifier resourceIdentifier;
    public AuditSuppression withResourceIdentifier(ResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressIndefinitely")
    public Boolean suppressIndefinitely;
    public AuditSuppression withSuppressIndefinitely(Boolean suppressIndefinitely) {
        this.suppressIndefinitely = suppressIndefinitely;
        return this;
    }
}
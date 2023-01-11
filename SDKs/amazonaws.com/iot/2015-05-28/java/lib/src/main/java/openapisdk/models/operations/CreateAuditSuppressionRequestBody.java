package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateAuditSuppressionRequestBody {
    @JsonProperty("checkName")
    public String checkName;
    public CreateAuditSuppressionRequestBody withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateAuditSuppressionRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAuditSuppressionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;
    public CreateAuditSuppressionRequestBody withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonProperty("resourceIdentifier")
    public CreateAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier;
    public CreateAuditSuppressionRequestBody withResourceIdentifier(CreateAuditSuppressionRequestBodyResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressIndefinitely")
    public Boolean suppressIndefinitely;
    public CreateAuditSuppressionRequestBody withSuppressIndefinitely(Boolean suppressIndefinitely) {
        this.suppressIndefinitely = suppressIndefinitely;
        return this;
    }
}
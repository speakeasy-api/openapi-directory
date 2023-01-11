package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetParametersForImportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportToken")
    public String importToken;
    public GetParametersForImportResponse withImportToken(String importToken) {
        this.importToken = importToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public GetParametersForImportResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ParametersValidTo")
    public OffsetDateTime parametersValidTo;
    public GetParametersForImportResponse withParametersValidTo(OffsetDateTime parametersValidTo) {
        this.parametersValidTo = parametersValidTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKey")
    public String publicKey;
    public GetParametersForImportResponse withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}
package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetCredentials200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_authority_data")
    public String certificateAuthorityData;
    public GetCredentials200ApplicationJson withCertificateAuthorityData(String certificateAuthorityData) {
        this.certificateAuthorityData = certificateAuthorityData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_certificate_data")
    public String clientCertificateData;
    public GetCredentials200ApplicationJson withClientCertificateData(String clientCertificateData) {
        this.clientCertificateData = clientCertificateData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_key_data")
    public String clientKeyData;
    public GetCredentials200ApplicationJson withClientKeyData(String clientKeyData) {
        this.clientKeyData = clientKeyData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public GetCredentials200ApplicationJson withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public GetCredentials200ApplicationJson withServer(String server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GetCredentials200ApplicationJson withToken(String token) {
        this.token = token;
        return this;
    }
}
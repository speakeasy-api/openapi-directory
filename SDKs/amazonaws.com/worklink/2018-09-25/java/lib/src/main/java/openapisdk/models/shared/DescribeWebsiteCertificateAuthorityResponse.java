package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeWebsiteCertificateAuthorityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Certificate")
    public String certificate;
    public DescribeWebsiteCertificateAuthorityResponse withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public DescribeWebsiteCertificateAuthorityResponse withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public DescribeWebsiteCertificateAuthorityResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}
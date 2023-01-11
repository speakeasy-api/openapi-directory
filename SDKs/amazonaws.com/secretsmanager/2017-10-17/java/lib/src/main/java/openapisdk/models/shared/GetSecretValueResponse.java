package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetSecretValueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public GetSecretValueResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public GetSecretValueResponse withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetSecretValueResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretBinary")
    public String secretBinary;
    public GetSecretValueResponse withSecretBinary(String secretBinary) {
        this.secretBinary = secretBinary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretString")
    public String secretString;
    public GetSecretValueResponse withSecretString(String secretString) {
        this.secretString = secretString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public GetSecretValueResponse withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionStages")
    public String[] versionStages;
    public GetSecretValueResponse withVersionStages(String[] versionStages) {
        this.versionStages = versionStages;
        return this;
    }
}
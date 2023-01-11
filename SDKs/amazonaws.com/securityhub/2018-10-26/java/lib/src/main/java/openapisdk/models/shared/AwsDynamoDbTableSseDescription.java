package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableSseDescription
 * Information about the server-side encryption for the table.
**/
public class AwsDynamoDbTableSseDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InaccessibleEncryptionDateTime")
    public String inaccessibleEncryptionDateTime;
    public AwsDynamoDbTableSseDescription withInaccessibleEncryptionDateTime(String inaccessibleEncryptionDateTime) {
        this.inaccessibleEncryptionDateTime = inaccessibleEncryptionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsMasterKeyArn")
    public String kmsMasterKeyArn;
    public AwsDynamoDbTableSseDescription withKmsMasterKeyArn(String kmsMasterKeyArn) {
        this.kmsMasterKeyArn = kmsMasterKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SseType")
    public String sseType;
    public AwsDynamoDbTableSseDescription withSseType(String sseType) {
        this.sseType = sseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsDynamoDbTableSseDescription withStatus(String status) {
        this.status = status;
        return this;
    }
}
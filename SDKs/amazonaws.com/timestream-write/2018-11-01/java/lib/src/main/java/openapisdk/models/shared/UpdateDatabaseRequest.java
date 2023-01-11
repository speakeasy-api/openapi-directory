package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDatabaseRequest {
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateDatabaseRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public UpdateDatabaseRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
}
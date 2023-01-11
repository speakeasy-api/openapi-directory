package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateDatabaseClusterRequestBodyBackupRestore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("backup_created_at")
    public OffsetDateTime backupCreatedAt;
    public CreateDatabaseClusterRequestBodyBackupRestore withBackupCreatedAt(OffsetDateTime backupCreatedAt) {
        this.backupCreatedAt = backupCreatedAt;
        return this;
    }
    @JsonProperty("database_name")
    public String databaseName;
    public CreateDatabaseClusterRequestBodyBackupRestore withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
}
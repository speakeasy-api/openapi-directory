package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileActionEntity
 * Move file/folder
**/
public class FileActionEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_migration_id")
    public Integer fileMigrationId;
    public FileActionEntity withFileMigrationId(Integer fileMigrationId) {
        this.fileMigrationId = fileMigrationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public FileActionEntity withStatus(String status) {
        this.status = status;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBackupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Backup")
    public Backup backup;
    public CreateBackupResponse withBackup(Backup backup) {
        this.backup = backup;
        return this;
    }
}
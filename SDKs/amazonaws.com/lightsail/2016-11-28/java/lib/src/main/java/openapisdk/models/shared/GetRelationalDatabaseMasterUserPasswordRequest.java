package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseMasterUserPasswordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordVersion")
    public RelationalDatabasePasswordVersionEnum passwordVersion;
    public GetRelationalDatabaseMasterUserPasswordRequest withPasswordVersion(RelationalDatabasePasswordVersionEnum passwordVersion) {
        this.passwordVersion = passwordVersion;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public GetRelationalDatabaseMasterUserPasswordRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}
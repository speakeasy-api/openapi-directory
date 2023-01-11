package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpgradeAppliedSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public UpgradeAppliedSchemaResponse withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpgradedSchemaArn")
    public String upgradedSchemaArn;
    public UpgradeAppliedSchemaResponse withUpgradedSchemaArn(String upgradedSchemaArn) {
        this.upgradedSchemaArn = upgradedSchemaArn;
        return this;
    }
}
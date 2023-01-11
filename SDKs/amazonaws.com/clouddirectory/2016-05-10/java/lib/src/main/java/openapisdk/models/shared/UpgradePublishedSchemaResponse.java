package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpgradePublishedSchemaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpgradedSchemaArn")
    public String upgradedSchemaArn;
    public UpgradePublishedSchemaResponse withUpgradedSchemaArn(String upgradedSchemaArn) {
        this.upgradedSchemaArn = upgradedSchemaArn;
        return this;
    }
}
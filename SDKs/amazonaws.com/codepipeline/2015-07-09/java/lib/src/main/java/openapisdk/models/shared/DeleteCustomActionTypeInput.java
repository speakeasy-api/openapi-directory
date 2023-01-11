package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteCustomActionTypeInput
 * Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted.
**/
public class DeleteCustomActionTypeInput {
    @JsonProperty("category")
    public ActionCategoryEnum category;
    public DeleteCustomActionTypeInput withCategory(ActionCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public DeleteCustomActionTypeInput withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public DeleteCustomActionTypeInput withVersion(String version) {
        this.version = version;
        return this;
    }
}
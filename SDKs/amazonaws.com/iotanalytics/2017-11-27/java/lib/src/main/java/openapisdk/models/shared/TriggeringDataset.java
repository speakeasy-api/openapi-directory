package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TriggeringDataset
 * Information about the dataset whose content generation triggers the new dataset content generation.
**/
public class TriggeringDataset {
    @JsonProperty("name")
    public String name;
    public TriggeringDataset withName(String name) {
        this.name = name;
        return this;
    }
}
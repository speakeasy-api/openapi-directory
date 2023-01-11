package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutAssetPropertyValueEntry
 * An asset property value entry containing the following information.
**/
public class PutAssetPropertyValueEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetId")
    public String assetId;
    public PutAssetPropertyValueEntry withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryId")
    public String entryId;
    public PutAssetPropertyValueEntry withEntryId(String entryId) {
        this.entryId = entryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyAlias")
    public String propertyAlias;
    public PutAssetPropertyValueEntry withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyId")
    public String propertyId;
    public PutAssetPropertyValueEntry withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @JsonProperty("propertyValues")
    public AssetPropertyValue[] propertyValues;
    public PutAssetPropertyValueEntry withPropertyValues(AssetPropertyValue[] propertyValues) {
        this.propertyValues = propertyValues;
        return this;
    }
}
/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetAssetPropertyValueSuccessEntry - Contains success information for an entry that is associated with the &lt;a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html"&gt;BatchGetAssetPropertyValue&lt;/a&gt; API.
 */
public class BatchGetAssetPropertyValueSuccessEntry {
    /**
     * Contains asset property value information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetPropertyValue")
    public AssetPropertyValue assetPropertyValue;

    public BatchGetAssetPropertyValueSuccessEntry withAssetPropertyValue(AssetPropertyValue assetPropertyValue) {
        this.assetPropertyValue = assetPropertyValue;
        return this;
    }
    
    @JsonProperty("entryId")
    public String entryId;

    public BatchGetAssetPropertyValueSuccessEntry withEntryId(String entryId) {
        this.entryId = entryId;
        return this;
    }
    
    public BatchGetAssetPropertyValueSuccessEntry(@JsonProperty("entryId") String entryId) {
        this.entryId = entryId;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PutDataLakeSettingsRequestBody {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment. 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;

    public PutDataLakeSettingsRequestBody withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    
    /**
     * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
     */
    @JsonProperty("DataLakeSettings")
    public PutDataLakeSettingsRequestBodyDataLakeSettings dataLakeSettings;

    public PutDataLakeSettingsRequestBody withDataLakeSettings(PutDataLakeSettingsRequestBodyDataLakeSettings dataLakeSettings) {
        this.dataLakeSettings = dataLakeSettings;
        return this;
    }
    
    public PutDataLakeSettingsRequestBody(@JsonProperty("DataLakeSettings") PutDataLakeSettingsRequestBodyDataLakeSettings dataLakeSettings) {
        this.dataLakeSettings = dataLakeSettings;
  }
}

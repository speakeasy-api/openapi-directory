/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum FeatureGroupSortByEnum {
    NAME("Name"),
    FEATURE_GROUP_STATUS("FeatureGroupStatus"),
    OFFLINE_STORE_STATUS("OfflineStoreStatus"),
    CREATION_TIME("CreationTime");

    @JsonValue
    public final String value;

    private FeatureGroupSortByEnum(String value) {
        this.value = value;
    }
}

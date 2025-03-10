/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribePlacementGroupsResultPlacementGroupsSpreadLevelEnum - The spread level for the placement group. &lt;i&gt;Only&lt;/i&gt; Outpost placement groups can be spread across hosts.
 */
public enum DescribePlacementGroupsResultPlacementGroupsSpreadLevelEnum {
    HOST("host"),
    RACK("rack");

    @JsonValue
    public final String value;

    private DescribePlacementGroupsResultPlacementGroupsSpreadLevelEnum(String value) {
        this.value = value;
    }
}

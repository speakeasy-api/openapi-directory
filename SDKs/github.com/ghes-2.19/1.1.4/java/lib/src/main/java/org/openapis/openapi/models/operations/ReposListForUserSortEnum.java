/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ReposListForUserSortEnum - Can be one of `created`, `updated`, `pushed`, `full_name`.
 */
public enum ReposListForUserSortEnum {
    CREATED("created"),
    UPDATED("updated"),
    PUSHED("pushed"),
    FULL_NAME("full_name");

    @JsonValue
    public final String value;

    private ReposListForUserSortEnum(String value) {
        this.value = value;
    }
}

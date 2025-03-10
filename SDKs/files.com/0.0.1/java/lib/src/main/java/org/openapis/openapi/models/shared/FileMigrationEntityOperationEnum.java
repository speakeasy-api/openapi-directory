/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * FileMigrationEntityOperationEnum - The type of operation
 */
public enum FileMigrationEntityOperationEnum {
    DELETE("delete"),
    MOVE("move"),
    COPY("copy"),
    REGIONAL_MIGRATION("regional_migration");

    @JsonValue
    public final String value;

    private FileMigrationEntityOperationEnum(String value) {
        this.value = value;
    }
}

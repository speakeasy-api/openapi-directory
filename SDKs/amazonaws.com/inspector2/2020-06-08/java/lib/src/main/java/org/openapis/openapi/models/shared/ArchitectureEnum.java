/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ArchitectureEnum {
    X8664("X86_64"),
    ARM64("ARM64");

    @JsonValue
    public final String value;

    private ArchitectureEnum(String value) {
        this.value = value;
    }
}

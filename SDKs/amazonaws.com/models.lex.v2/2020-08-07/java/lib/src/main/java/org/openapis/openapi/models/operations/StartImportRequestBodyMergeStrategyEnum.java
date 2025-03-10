/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * StartImportRequestBodyMergeStrategyEnum - The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is &lt;code&gt;FailOnConflict&lt;/code&gt; existing resources are not overwritten and the import fails.
 */
public enum StartImportRequestBodyMergeStrategyEnum {
    OVERWRITE("Overwrite"),
    FAIL_ON_CONFLICT("FailOnConflict"),
    APPEND("Append");

    @JsonValue
    public final String value;

    private StartImportRequestBodyMergeStrategyEnum(String value) {
        this.value = value;
    }
}

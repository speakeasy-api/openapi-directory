/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GitCreateTreeRequestBodyTreeModeEnum - The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
 */
public enum GitCreateTreeRequestBodyTreeModeEnum {
    ONE_HUNDRED_THOUSAND_SIX_HUNDRED_AND_FORTY_FOUR("100644"),
    ONE_HUNDRED_THOUSAND_SEVEN_HUNDRED_AND_FIFTY_FIVE("100755"),
    FORTY_THOUSAND("040000"),
    ONE_HUNDRED_AND_SIXTY_THOUSAND("160000"),
    ONE_HUNDRED_AND_TWENTY_THOUSAND("120000");

    @JsonValue
    public final String value;

    private GitCreateTreeRequestBodyTreeModeEnum(String value) {
        this.value = value;
    }
}

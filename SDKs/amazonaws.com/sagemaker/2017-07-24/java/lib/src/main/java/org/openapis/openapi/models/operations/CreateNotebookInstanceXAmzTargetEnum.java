/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateNotebookInstanceXAmzTargetEnum
 */
public enum CreateNotebookInstanceXAmzTargetEnum {
    SAGE_MAKER_CREATE_NOTEBOOK_INSTANCE("SageMaker.CreateNotebookInstance");

    @JsonValue
    public final String value;

    private CreateNotebookInstanceXAmzTargetEnum(String value) {
        this.value = value;
    }
}

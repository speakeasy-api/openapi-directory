/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteAssociationXAmzTargetEnum
 */
public enum DeleteAssociationXAmzTargetEnum {
    AMAZON_SSM_DELETE_ASSOCIATION("AmazonSSM.DeleteAssociation");

    @JsonValue
    public final String value;

    private DeleteAssociationXAmzTargetEnum(String value) {
        this.value = value;
    }
}

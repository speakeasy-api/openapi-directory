/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateVpcLinkResponseVpcLinkVersionEnum - The version of the VPC link.
 */
public enum CreateVpcLinkResponseVpcLinkVersionEnum {
    V2("V2");

    @JsonValue
    public final String value;

    private CreateVpcLinkResponseVpcLinkVersionEnum(String value) {
        this.value = value;
    }
}

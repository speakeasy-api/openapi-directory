/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum - The type of product code.
 */
public enum DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum {
    DEVPAY("devpay"),
    MARKETPLACE("marketplace");

    @JsonValue
    public final String value;

    private DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum(String value) {
        this.value = value;
    }
}

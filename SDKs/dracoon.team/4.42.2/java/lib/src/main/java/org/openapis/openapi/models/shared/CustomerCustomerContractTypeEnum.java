/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CustomerCustomerContractTypeEnum - Customer type
 */
public enum CustomerCustomerContractTypeEnum {
    DEMO("demo"),
    FREE("free"),
    PAY("pay");

    @JsonValue
    public final String value;

    private CustomerCustomerContractTypeEnum(String value) {
        this.value = value;
    }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * DeleteIpamPoolResultIpamPoolAddressFamilyEnum - The address family of the pool.
 */
public enum DeleteIpamPoolResultIpamPoolAddressFamilyEnum {
    IPV4("ipv4"),
    IPV6("ipv6");

    @JsonValue
    public final String value;

    private DeleteIpamPoolResultIpamPoolAddressFamilyEnum(String value) {
        this.value = value;
    }
}

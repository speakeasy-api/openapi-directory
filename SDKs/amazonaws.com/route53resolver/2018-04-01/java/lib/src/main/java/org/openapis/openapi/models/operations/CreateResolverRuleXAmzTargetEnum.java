/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateResolverRuleXAmzTargetEnum
 */
public enum CreateResolverRuleXAmzTargetEnum {
    ROUTE53_RESOLVER_CREATE_RESOLVER_RULE("Route53Resolver.CreateResolverRule");

    @JsonValue
    public final String value;

    private CreateResolverRuleXAmzTargetEnum(String value) {
        this.value = value;
    }
}

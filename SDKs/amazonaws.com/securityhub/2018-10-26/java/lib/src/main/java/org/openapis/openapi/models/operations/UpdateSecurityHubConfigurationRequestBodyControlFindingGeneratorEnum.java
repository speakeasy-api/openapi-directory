/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum - &lt;p&gt;Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to &lt;code&gt;SECURITY_CONTROL&lt;/code&gt;, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.&lt;/p&gt; &lt;p&gt;If the value for this field is set to &lt;code&gt;STANDARD_CONTROL&lt;/code&gt;, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.&lt;/p&gt; &lt;p&gt;For accounts that are part of an organization, this value can only be updated in the administrator account.&lt;/p&gt;
 */
public enum UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum {
    STANDARD_CONTROL("STANDARD_CONTROL"),
    SECURITY_CONTROL("SECURITY_CONTROL");

    @JsonValue
    public final String value;

    private UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum(String value) {
        this.value = value;
    }
}

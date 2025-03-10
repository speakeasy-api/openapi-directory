/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GETImportStacksToStackSetCallAsEnum - &lt;p&gt;By default, &lt;code&gt;SELF&lt;/code&gt; is specified. Use &lt;code&gt;SELF&lt;/code&gt; for stack sets with self-managed permissions.&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt;If you are signed in to the management account, specify &lt;code&gt;SELF&lt;/code&gt;.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt;For service managed stack sets, specify &lt;code&gt;DELEGATED_ADMIN&lt;/code&gt;.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
 */
public enum GETImportStacksToStackSetCallAsEnum {
    SELF("SELF"),
    DELEGATED_ADMIN("DELEGATED_ADMIN");

    @JsonValue
    public final String value;

    private GETImportStacksToStackSetCallAsEnum(String value) {
        this.value = value;
    }
}

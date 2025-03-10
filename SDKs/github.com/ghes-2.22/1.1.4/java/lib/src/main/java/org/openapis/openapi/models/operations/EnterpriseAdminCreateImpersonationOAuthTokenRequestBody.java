/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody {
    /**
     * A list of [scopes](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;

    public EnterpriseAdminCreateImpersonationOAuthTokenRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    
    public EnterpriseAdminCreateImpersonationOAuthTokenRequestBody(){}
}

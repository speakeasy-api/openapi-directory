/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest {
    /**
     * Unique identifier of the API credential.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiCredentialId")
    public String apiCredentialId;

    public GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest withApiCredentialId(String apiCredentialId) {
        this.apiCredentialId = apiCredentialId;
        return this;
    }
    
    /**
     * The unique identifier of the company account.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;

    public GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    
    /**
     * Unique identifier of the allowed origin.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=originId")
    public String originId;

    public GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest withOriginId(String originId) {
        this.originId = originId;
        return this;
    }
    
    public GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRequest(@JsonProperty("apiCredentialId") String apiCredentialId, @JsonProperty("companyId") String companyId, @JsonProperty("originId") String originId) {
        this.apiCredentialId = apiCredentialId;
        this.companyId = companyId;
        this.originId = originId;
  }
}

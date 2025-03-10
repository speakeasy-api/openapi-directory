/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentArtifactSchemaConsentUser {
    @JsonProperty("email")
    public String email;

    public ConsentArtifactSchemaConsentUser withEmail(String email) {
        this.email = email;
        return this;
    }
    
    @JsonProperty("idNumber")
    public String idNumber;

    public ConsentArtifactSchemaConsentUser withIdNumber(String idNumber) {
        this.idNumber = idNumber;
        return this;
    }
    
    @JsonProperty("idType")
    public String idType;

    public ConsentArtifactSchemaConsentUser withIdType(String idType) {
        this.idType = idType;
        return this;
    }
    
    @JsonProperty("mobile")
    public String mobile;

    public ConsentArtifactSchemaConsentUser withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    
    public ConsentArtifactSchemaConsentUser(@JsonProperty("email") String email, @JsonProperty("idNumber") String idNumber, @JsonProperty("idType") String idType, @JsonProperty("mobile") String mobile) {
        this.email = email;
        this.idNumber = idNumber;
        this.idType = idType;
        this.mobile = mobile;
  }
}

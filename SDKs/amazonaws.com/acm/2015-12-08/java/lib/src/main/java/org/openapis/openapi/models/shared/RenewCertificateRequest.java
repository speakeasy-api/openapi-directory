/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RenewCertificateRequest {
    @JsonProperty("CertificateArn")
    public String certificateArn;

    public RenewCertificateRequest withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    
    public RenewCertificateRequest(@JsonProperty("CertificateArn") String certificateArn) {
        this.certificateArn = certificateArn;
  }
}

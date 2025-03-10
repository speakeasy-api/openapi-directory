/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCertificateFromCsrRequestBody {
    /**
     * The certificate signing request (CSR).
     */
    @JsonProperty("certificateSigningRequest")
    public String certificateSigningRequest;

    public CreateCertificateFromCsrRequestBody withCertificateSigningRequest(String certificateSigningRequest) {
        this.certificateSigningRequest = certificateSigningRequest;
        return this;
    }
    
    public CreateCertificateFromCsrRequestBody(@JsonProperty("certificateSigningRequest") String certificateSigningRequest) {
        this.certificateSigningRequest = certificateSigningRequest;
  }
}

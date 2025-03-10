/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeCertificateResponse - The output of the DescribeCertificate operation.
 */
public class DescribeCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateDescription")
    public CertificateDescription certificateDescription;

    public DescribeCertificateResponse withCertificateDescription(CertificateDescription certificateDescription) {
        this.certificateDescription = certificateDescription;
        return this;
    }
    
    public DescribeCertificateResponse(){}
}

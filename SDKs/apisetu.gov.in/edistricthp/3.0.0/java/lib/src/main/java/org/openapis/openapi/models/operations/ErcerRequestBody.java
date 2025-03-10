/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErcerRequestBody - Request format
 */
public class ErcerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public ErcerRequestBodyCertificateParameters certificateParameters;

    public ErcerRequestBody withCertificateParameters(ErcerRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public org.openapis.openapi.models.shared.ConsentArtifactSchema consentArtifact;

    public ErcerRequestBody withConsentArtifact(org.openapis.openapi.models.shared.ConsentArtifactSchema consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    
    /**
     * The format of the certificate in response.
     */
    @JsonProperty("format")
    public ErcerRequestBodyFormatEnum format;

    public ErcerRequestBody withFormat(ErcerRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    @JsonProperty("txnId")
    public String txnId;

    public ErcerRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
    
    public ErcerRequestBody(@JsonProperty("format") ErcerRequestBodyFormatEnum format, @JsonProperty("txnId") String txnId) {
        this.format = format;
        this.txnId = txnId;
  }
}

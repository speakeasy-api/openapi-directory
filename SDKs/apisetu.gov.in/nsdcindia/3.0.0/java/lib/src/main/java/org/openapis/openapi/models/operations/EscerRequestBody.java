/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EscerRequestBody - Request format
 */
public class EscerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateParameters")
    public EscerRequestBodyCertificateParameters certificateParameters;

    public EscerRequestBody withCertificateParameters(EscerRequestBodyCertificateParameters certificateParameters) {
        this.certificateParameters = certificateParameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentArtifact")
    public org.openapis.openapi.models.shared.ConsentArtifactSchema consentArtifact;

    public EscerRequestBody withConsentArtifact(org.openapis.openapi.models.shared.ConsentArtifactSchema consentArtifact) {
        this.consentArtifact = consentArtifact;
        return this;
    }
    
    /**
     * The format of the certificate in response.
     */
    @JsonProperty("format")
    public EscerRequestBodyFormatEnum format;

    public EscerRequestBody withFormat(EscerRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
    
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    @JsonProperty("txnId")
    public String txnId;

    public EscerRequestBody withTxnId(String txnId) {
        this.txnId = txnId;
        return this;
    }
    
    public EscerRequestBody(@JsonProperty("format") EscerRequestBodyFormatEnum format, @JsonProperty("txnId") String txnId) {
        this.format = format;
        this.txnId = txnId;
  }
}

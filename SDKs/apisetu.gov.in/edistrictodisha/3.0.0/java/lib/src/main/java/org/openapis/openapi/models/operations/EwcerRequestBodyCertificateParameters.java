/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EwcerRequestBodyCertificateParameters {
    /**
     * Aadhaar number
     */
    @JsonProperty("UID")
    public String uid;

    public EwcerRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    
    /**
     * ApplicationReferenceNo
     */
    @JsonProperty("refno")
    public String refno;

    public EwcerRequestBodyCertificateParameters withRefno(String refno) {
        this.refno = refno;
        return this;
    }
    
    public EwcerRequestBodyCertificateParameters(@JsonProperty("UID") String uid, @JsonProperty("refno") String refno) {
        this.uid = uid;
        this.refno = refno;
  }
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DmcerRequestBodyCertificateParameters {
    /**
     * Full name
     */
    @JsonProperty("FullName")
    public String fullName;

    public DmcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    
    /**
     * Certificate Reference No
     */
    @JsonProperty("RefNo")
    public String refNo;

    public DmcerRequestBodyCertificateParameters withRefNo(String refNo) {
        this.refNo = refNo;
        return this;
    }
    
    /**
     * Token No
     */
    @JsonProperty("TokenNo")
    public String tokenNo;

    public DmcerRequestBodyCertificateParameters withTokenNo(String tokenNo) {
        this.tokenNo = tokenNo;
        return this;
    }
    
    public DmcerRequestBodyCertificateParameters(@JsonProperty("FullName") String fullName, @JsonProperty("RefNo") String refNo, @JsonProperty("TokenNo") String tokenNo) {
        this.fullName = fullName;
        this.refNo = refNo;
        this.tokenNo = tokenNo;
  }
}

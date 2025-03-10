/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CfltrRequestBodyCertificateParameters {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    @JsonProperty("DOB")
    public String dob;

    public CfltrRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    
    /**
     * Full name
     */
    @JsonProperty("FullName")
    public String fullName;

    public CfltrRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    
    /**
     * Registration Number
     */
    @JsonProperty("RegNum")
    public String regNum;

    public CfltrRequestBodyCertificateParameters withRegNum(String regNum) {
        this.regNum = regNum;
        return this;
    }
    
    /**
     * Aadhaar number
     */
    @JsonProperty("UID")
    public String uid;

    public CfltrRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    
    public CfltrRequestBodyCertificateParameters(@JsonProperty("DOB") String dob, @JsonProperty("FullName") String fullName, @JsonProperty("RegNum") String regNum, @JsonProperty("UID") String uid) {
        this.dob = dob;
        this.fullName = fullName;
        this.regNum = regNum;
        this.uid = uid;
  }
}

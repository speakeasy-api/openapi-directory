/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HpcerRequestBodyCertificateParameters {
    /**
     * Full name
     */
    @JsonProperty("FullName")
    public String fullName;

    public HpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    
    /**
     * Roll No
     */
    @JsonProperty("rollno")
    public String rollno;

    public HpcerRequestBodyCertificateParameters withRollno(String rollno) {
        this.rollno = rollno;
        return this;
    }
    
    /**
     * Year
     */
    @JsonProperty("year")
    public String year;

    public HpcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
    
    public HpcerRequestBodyCertificateParameters(@JsonProperty("FullName") String fullName, @JsonProperty("rollno") String rollno, @JsonProperty("year") String year) {
        this.fullName = fullName;
        this.rollno = rollno;
        this.year = year;
  }
}

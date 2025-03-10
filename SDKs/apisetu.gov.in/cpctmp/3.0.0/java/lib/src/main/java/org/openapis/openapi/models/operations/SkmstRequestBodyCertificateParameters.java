/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkmstRequestBodyCertificateParameters {
    /**
     * 10thRollNumber
     */
    @JsonProperty("txt10thRollNo")
    public String txt10thRollNo;

    public SkmstRequestBodyCertificateParameters withTxt10thRollNo(String txt10thRollNo) {
        this.txt10thRollNo = txt10thRollNo;
        return this;
    }
    
    /**
     * Registration Number
     */
    @JsonProperty("txtCandidateAppSeq")
    public String txtCandidateAppSeq;

    public SkmstRequestBodyCertificateParameters withTxtCandidateAppSeq(String txtCandidateAppSeq) {
        this.txtCandidateAppSeq = txtCandidateAppSeq;
        return this;
    }
    
    /**
     * ExamDate
     */
    @JsonProperty("txtExamDate")
    public String txtExamDate;

    public SkmstRequestBodyCertificateParameters withTxtExamDate(String txtExamDate) {
        this.txtExamDate = txtExamDate;
        return this;
    }
    
    public SkmstRequestBodyCertificateParameters(@JsonProperty("txt10thRollNo") String txt10thRollNo, @JsonProperty("txtCandidateAppSeq") String txtCandidateAppSeq, @JsonProperty("txtExamDate") String txtExamDate) {
        this.txt10thRollNo = txt10thRollNo;
        this.txtCandidateAppSeq = txtCandidateAppSeq;
        this.txtExamDate = txtExamDate;
  }
}

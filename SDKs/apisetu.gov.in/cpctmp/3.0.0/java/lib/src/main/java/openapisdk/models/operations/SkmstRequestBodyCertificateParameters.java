package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SkmstRequestBodyCertificateParameters {
    @JsonProperty("txt10thRollNo")
    public String txt10thRollNo;
    public SkmstRequestBodyCertificateParameters withTxt10thRollNo(String txt10thRollNo) {
        this.txt10thRollNo = txt10thRollNo;
        return this;
    }
    @JsonProperty("txtCandidateAppSeq")
    public String txtCandidateAppSeq;
    public SkmstRequestBodyCertificateParameters withTxtCandidateAppSeq(String txtCandidateAppSeq) {
        this.txtCandidateAppSeq = txtCandidateAppSeq;
        return this;
    }
    @JsonProperty("txtExamDate")
    public String txtExamDate;
    public SkmstRequestBodyCertificateParameters withTxtExamDate(String txtExamDate) {
        this.txtExamDate = txtExamDate;
        return this;
    }
}
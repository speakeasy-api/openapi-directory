package openapisdk.models.operations;



public class CodesOfConductGetForRepoResponse {
    public String contentType;
    public CodesOfConductGetForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodesOfConductGetForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CodeOfConduct codeOfConduct;
    public CodesOfConductGetForRepoResponse withCodeOfConduct(openapisdk.models.shared.CodeOfConduct codeOfConduct) {
        this.codeOfConduct = codeOfConduct;
        return this;
    }
}
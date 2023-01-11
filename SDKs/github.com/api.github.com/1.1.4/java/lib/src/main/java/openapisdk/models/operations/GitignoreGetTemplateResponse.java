package openapisdk.models.operations;



public class GitignoreGetTemplateResponse {
    public String contentType;
    public GitignoreGetTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GitignoreGetTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GitignoreTemplate gitignoreTemplate;
    public GitignoreGetTemplateResponse withGitignoreTemplate(openapisdk.models.shared.GitignoreTemplate gitignoreTemplate) {
        this.gitignoreTemplate = gitignoreTemplate;
        return this;
    }
}
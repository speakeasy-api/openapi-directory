package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeRepository
 * Describes a source code repository.
**/
public class CodeRepository {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeConfiguration")
    public CodeConfiguration codeConfiguration;
    public CodeRepository withCodeConfiguration(CodeConfiguration codeConfiguration) {
        this.codeConfiguration = codeConfiguration;
        return this;
    }
    @JsonProperty("RepositoryUrl")
    public String repositoryUrl;
    public CodeRepository withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("SourceCodeVersion")
    public SourceCodeVersion sourceCodeVersion;
    public CodeRepository withSourceCodeVersion(SourceCodeVersion sourceCodeVersion) {
        this.sourceCodeVersion = sourceCodeVersion;
        return this;
    }
}
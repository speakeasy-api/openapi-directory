package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeArtifacts
 * <p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul>
**/
public class CodeArtifacts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BuildArtifactsObjectKey")
    public String buildArtifactsObjectKey;
    public CodeArtifacts withBuildArtifactsObjectKey(String buildArtifactsObjectKey) {
        this.buildArtifactsObjectKey = buildArtifactsObjectKey;
        return this;
    }
    @JsonProperty("SourceCodeArtifactsObjectKey")
    public String sourceCodeArtifactsObjectKey;
    public CodeArtifacts withSourceCodeArtifactsObjectKey(String sourceCodeArtifactsObjectKey) {
        this.sourceCodeArtifactsObjectKey = sourceCodeArtifactsObjectKey;
        return this;
    }
}
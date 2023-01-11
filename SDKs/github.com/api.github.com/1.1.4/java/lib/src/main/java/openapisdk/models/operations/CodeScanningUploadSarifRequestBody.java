package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningUploadSarifRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkout_uri")
    public String checkoutUri;
    public CodeScanningUploadSarifRequestBody withCheckoutUri(String checkoutUri) {
        this.checkoutUri = checkoutUri;
        return this;
    }
    @JsonProperty("commit_sha")
    public String commitSha;
    public CodeScanningUploadSarifRequestBody withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public CodeScanningUploadSarifRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("sarif")
    public String sarif;
    public CodeScanningUploadSarifRequestBody withSarif(String sarif) {
        this.sarif = sarif;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("started_at")
    public LocalDate startedAt;
    public CodeScanningUploadSarifRequestBody withStartedAt(LocalDate startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tool_name")
    public String toolName;
    public CodeScanningUploadSarifRequestBody withToolName(String toolName) {
        this.toolName = toolName;
        return this;
    }
}
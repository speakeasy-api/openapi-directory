package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RunnerApplication
 * Runner Application
**/
public class RunnerApplication {
    @JsonProperty("architecture")
    public String architecture;
    public RunnerApplication withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonProperty("download_url")
    public String downloadUrl;
    public RunnerApplication withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonProperty("filename")
    public String filename;
    public RunnerApplication withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("os")
    public String os;
    public RunnerApplication withOs(String os) {
        this.os = os;
        return this;
    }
}
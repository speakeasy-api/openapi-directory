package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwarePackage
 * Information about a software package.
**/
public class SoftwarePackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Architecture")
    public String architecture;
    public SoftwarePackage withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Epoch")
    public String epoch;
    public SoftwarePackage withEpoch(String epoch) {
        this.epoch = epoch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilePath")
    public String filePath;
    public SoftwarePackage withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SoftwarePackage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PackageManager")
    public String packageManager;
    public SoftwarePackage withPackageManager(String packageManager) {
        this.packageManager = packageManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Release")
    public String release;
    public SoftwarePackage withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public SoftwarePackage withVersion(String version) {
        this.version = version;
        return this;
    }
}
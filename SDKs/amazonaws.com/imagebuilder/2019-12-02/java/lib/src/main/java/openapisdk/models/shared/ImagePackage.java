package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagePackage
 * Represents a package installed on an Image Builder image.
**/
public class ImagePackage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public ImagePackage withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageVersion")
    public String packageVersion;
    public ImagePackage withPackageVersion(String packageVersion) {
        this.packageVersion = packageVersion;
        return this;
    }
}
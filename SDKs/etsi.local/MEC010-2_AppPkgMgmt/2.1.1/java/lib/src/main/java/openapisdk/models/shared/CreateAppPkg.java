package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAppPkg {
    @JsonProperty("appPkgName")
    public String appPkgName;
    public CreateAppPkg withAppPkgName(String appPkgName) {
        this.appPkgName = appPkgName;
        return this;
    }
    @JsonProperty("appPkgPath")
    public String appPkgPath;
    public CreateAppPkg withAppPkgPath(String appPkgPath) {
        this.appPkgPath = appPkgPath;
        return this;
    }
    @JsonProperty("appPkgVersion")
    public String appPkgVersion;
    public CreateAppPkg withAppPkgVersion(String appPkgVersion) {
        this.appPkgVersion = appPkgVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appProvider")
    public String appProvider;
    public CreateAppPkg withAppProvider(String appProvider) {
        this.appProvider = appProvider;
        return this;
    }
    @JsonProperty("checksum")
    public Checksum checksum;
    public CreateAppPkg withChecksum(Checksum checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedData")
    public java.util.Map<String, Object> userDefinedData;
    public CreateAppPkg withUserDefinedData(java.util.Map<String, Object> userDefinedData) {
        this.userDefinedData = userDefinedData;
        return this;
    }
}
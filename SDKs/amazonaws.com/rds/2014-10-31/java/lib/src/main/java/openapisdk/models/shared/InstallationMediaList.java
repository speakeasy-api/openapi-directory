package openapisdk.models.shared;



/**
 * InstallationMediaList
 * Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
**/
public class InstallationMediaList {
    public String customAvailabilityZoneId;
    public InstallationMediaList withCustomAvailabilityZoneId(String customAvailabilityZoneId) {
        this.customAvailabilityZoneId = customAvailabilityZoneId;
        return this;
    }
    public String engine;
    public InstallationMediaList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineInstallationMediaPath;
    public InstallationMediaList withEngineInstallationMediaPath(String engineInstallationMediaPath) {
        this.engineInstallationMediaPath = engineInstallationMediaPath;
        return this;
    }
    public String engineVersion;
    public InstallationMediaList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public InstallationMediaFailureCause failureCause;
    public InstallationMediaList withFailureCause(InstallationMediaFailureCause failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    public String installationMediaId;
    public InstallationMediaList withInstallationMediaId(String installationMediaId) {
        this.installationMediaId = installationMediaId;
        return this;
    }
    public String osInstallationMediaPath;
    public InstallationMediaList withOsInstallationMediaPath(String osInstallationMediaPath) {
        this.osInstallationMediaPath = osInstallationMediaPath;
        return this;
    }
    public String status;
    public InstallationMediaList withStatus(String status) {
        this.status = status;
        return this;
    }
}
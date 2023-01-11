package openapisdk.models.shared;



public class InstallationMediaMessage {
    public InstallationMediaList[] installationMedia;
    public InstallationMediaMessage withInstallationMedia(InstallationMediaList[] installationMedia) {
        this.installationMedia = installationMedia;
        return this;
    }
    public String marker;
    public InstallationMediaMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}
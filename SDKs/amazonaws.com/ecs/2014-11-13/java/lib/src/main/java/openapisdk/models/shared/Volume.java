package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * A data volume used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerVolumeConfiguration")
    public DockerVolumeConfiguration dockerVolumeConfiguration;
    public Volume withDockerVolumeConfiguration(DockerVolumeConfiguration dockerVolumeConfiguration) {
        this.dockerVolumeConfiguration = dockerVolumeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("efsVolumeConfiguration")
    public EfsVolumeConfiguration efsVolumeConfiguration;
    public Volume withEfsVolumeConfiguration(EfsVolumeConfiguration efsVolumeConfiguration) {
        this.efsVolumeConfiguration = efsVolumeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fsxWindowsFileServerVolumeConfiguration")
    public FSxWindowsFileServerVolumeConfiguration fsxWindowsFileServerVolumeConfiguration;
    public Volume withFsxWindowsFileServerVolumeConfiguration(FSxWindowsFileServerVolumeConfiguration fsxWindowsFileServerVolumeConfiguration) {
        this.fsxWindowsFileServerVolumeConfiguration = fsxWindowsFileServerVolumeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public HostVolumeProperties host;
    public Volume withHost(HostVolumeProperties host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Volume withName(String name) {
        this.name = name;
        return this;
    }
}
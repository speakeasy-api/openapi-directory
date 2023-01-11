package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageDetailConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArgsEscaped")
    public Boolean argsEscaped;
    public ImageDetailConfig withArgsEscaped(Boolean argsEscaped) {
        this.argsEscaped = argsEscaped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachStderr")
    public Boolean attachStderr;
    public ImageDetailConfig withAttachStderr(Boolean attachStderr) {
        this.attachStderr = attachStderr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachStdin")
    public Boolean attachStdin;
    public ImageDetailConfig withAttachStdin(Boolean attachStdin) {
        this.attachStdin = attachStdin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachStdout")
    public Boolean attachStdout;
    public ImageDetailConfig withAttachStdout(Boolean attachStdout) {
        this.attachStdout = attachStdout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cmd")
    public String[] cmd;
    public ImageDetailConfig withCmd(String[] cmd) {
        this.cmd = cmd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domainmame")
    public String domainmame;
    public ImageDetailConfig withDomainmame(String domainmame) {
        this.domainmame = domainmame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entrypoint")
    public String entrypoint;
    public ImageDetailConfig withEntrypoint(String entrypoint) {
        this.entrypoint = entrypoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Env")
    public String[] env;
    public ImageDetailConfig withEnv(String[] env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposedPorts")
    public String[] exposedPorts;
    public ImageDetailConfig withExposedPorts(String[] exposedPorts) {
        this.exposedPorts = exposedPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hostname")
    public String hostname;
    public ImageDetailConfig withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Image")
    public String image;
    public ImageDetailConfig withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public String[] labels;
    public ImageDetailConfig withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnBuild")
    public String[] onBuild;
    public ImageDetailConfig withOnBuild(String[] onBuild) {
        this.onBuild = onBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenStdin")
    public Boolean openStdin;
    public ImageDetailConfig withOpenStdin(Boolean openStdin) {
        this.openStdin = openStdin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StdinOnce")
    public Boolean stdinOnce;
    public ImageDetailConfig withStdinOnce(Boolean stdinOnce) {
        this.stdinOnce = stdinOnce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tty")
    public Boolean tty;
    public ImageDetailConfig withTty(Boolean tty) {
        this.tty = tty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("User")
    public String user;
    public ImageDetailConfig withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Volumes")
    public String volumes;
    public ImageDetailConfig withVolumes(String volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkingDir")
    public String workingDir;
    public ImageDetailConfig withWorkingDir(String workingDir) {
        this.workingDir = workingDir;
        return this;
    }
}
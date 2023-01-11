package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Architecture")
    public String architecture;
    public ImageDetail withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Config")
    public ImageDetailConfig config;
    public ImageDetail withConfig(ImageDetailConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Container")
    public String container;
    public ImageDetail withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerConfig")
    public Object containerConfig;
    public ImageDetail withContainerConfig(Object containerConfig) {
        this.containerConfig = containerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Created")
    public String created;
    public ImageDetail withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DockerVersion")
    public String dockerVersion;
    public ImageDetail withDockerVersion(String dockerVersion) {
        this.dockerVersion = dockerVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ImageDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Os")
    public String os;
    public ImageDetail withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parent")
    public String parent;
    public ImageDetail withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Integer size;
    public ImageDetail withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tag")
    public String tag;
    public ImageDetail withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Throwaway")
    public String throwaway;
    public ImageDetail withThrowaway(String throwaway) {
        this.throwaway = throwaway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VirtualSize")
    public Integer virtualSize;
    public ImageDetail withVirtualSize(Integer virtualSize) {
        this.virtualSize = virtualSize;
        return this;
    }
}
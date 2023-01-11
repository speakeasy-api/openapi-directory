package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystem
 * Describes supported operating systems in AWS OpsWorks Stacks.
**/
public class OperatingSystem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationManagers")
    public OperatingSystemConfigurationManager[] configurationManagers;
    public OperatingSystem withConfigurationManagers(OperatingSystemConfigurationManager[] configurationManagers) {
        this.configurationManagers = configurationManagers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public OperatingSystem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public OperatingSystem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportedName")
    public String reportedName;
    public OperatingSystem withReportedName(String reportedName) {
        this.reportedName = reportedName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportedVersion")
    public String reportedVersion;
    public OperatingSystem withReportedVersion(String reportedVersion) {
        this.reportedVersion = reportedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Supported")
    public Boolean supported;
    public OperatingSystem withSupported(Boolean supported) {
        this.supported = supported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public OperatingSystem withType(String type) {
        this.type = type;
        return this;
    }
}
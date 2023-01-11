package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageScanFinding
 * Contains information about an image scan finding.
**/
public class ImageScanFinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public ImageScanFinding withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImageScanFinding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImageScanFinding withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public FindingSeverityEnum severity;
    public ImageScanFinding withSeverity(FindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ImageScanFinding withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
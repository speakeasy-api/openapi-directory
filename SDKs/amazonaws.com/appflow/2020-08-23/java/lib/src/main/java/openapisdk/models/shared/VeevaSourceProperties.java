package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VeevaSourceProperties
 *  The properties that are applied when using Veeva as a flow source. 
**/
public class VeevaSourceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentType")
    public String documentType;
    public VeevaSourceProperties withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAllVersions")
    public Boolean includeAllVersions;
    public VeevaSourceProperties withIncludeAllVersions(Boolean includeAllVersions) {
        this.includeAllVersions = includeAllVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRenditions")
    public Boolean includeRenditions;
    public VeevaSourceProperties withIncludeRenditions(Boolean includeRenditions) {
        this.includeRenditions = includeRenditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSourceFiles")
    public Boolean includeSourceFiles;
    public VeevaSourceProperties withIncludeSourceFiles(Boolean includeSourceFiles) {
        this.includeSourceFiles = includeSourceFiles;
        return this;
    }
    @JsonProperty("object")
    public String object;
    public VeevaSourceProperties withObject(String object) {
        this.object = object;
        return this;
    }
}
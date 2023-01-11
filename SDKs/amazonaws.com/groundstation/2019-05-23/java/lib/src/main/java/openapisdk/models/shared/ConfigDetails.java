package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigDetails
 * Details for certain <code>Config</code> object types in a contact.
**/
public class ConfigDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDemodDecodeDetails")
    public AntennaDemodDecodeDetails antennaDemodDecodeDetails;
    public ConfigDetails withAntennaDemodDecodeDetails(AntennaDemodDecodeDetails antennaDemodDecodeDetails) {
        this.antennaDemodDecodeDetails = antennaDemodDecodeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointDetails")
    public EndpointDetails endpointDetails;
    public ConfigDetails withEndpointDetails(EndpointDetails endpointDetails) {
        this.endpointDetails = endpointDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3RecordingDetails")
    public S3RecordingDetails s3RecordingDetails;
    public ConfigDetails withS3RecordingDetails(S3RecordingDetails s3RecordingDetails) {
        this.s3RecordingDetails = s3RecordingDetails;
        return this;
    }
}
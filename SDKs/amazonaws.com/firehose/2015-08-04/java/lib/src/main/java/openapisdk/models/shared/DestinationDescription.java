package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationDescription
 * Describes the destination for a delivery stream.
**/
public class DestinationDescription {
    @JsonProperty("DestinationId")
    public String destinationId;
    public DestinationDescription withDestinationId(String destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ElasticsearchDestinationDescription")
    public ElasticsearchDestinationDescription elasticsearchDestinationDescription;
    public DestinationDescription withElasticsearchDestinationDescription(ElasticsearchDestinationDescription elasticsearchDestinationDescription) {
        this.elasticsearchDestinationDescription = elasticsearchDestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExtendedS3DestinationDescription")
    public ExtendedS3DestinationDescription extendedS3DestinationDescription;
    public DestinationDescription withExtendedS3DestinationDescription(ExtendedS3DestinationDescription extendedS3DestinationDescription) {
        this.extendedS3DestinationDescription = extendedS3DestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpEndpointDestinationDescription")
    public HttpEndpointDestinationDescription httpEndpointDestinationDescription;
    public DestinationDescription withHttpEndpointDestinationDescription(HttpEndpointDestinationDescription httpEndpointDestinationDescription) {
        this.httpEndpointDestinationDescription = httpEndpointDestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftDestinationDescription")
    public RedshiftDestinationDescription redshiftDestinationDescription;
    public DestinationDescription withRedshiftDestinationDescription(RedshiftDestinationDescription redshiftDestinationDescription) {
        this.redshiftDestinationDescription = redshiftDestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3DestinationDescription")
    public S3DestinationDescription s3DestinationDescription;
    public DestinationDescription withS3DestinationDescription(S3DestinationDescription s3DestinationDescription) {
        this.s3DestinationDescription = s3DestinationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SplunkDestinationDescription")
    public SplunkDestinationDescription splunkDestinationDescription;
    public DestinationDescription withSplunkDestinationDescription(SplunkDestinationDescription splunkDestinationDescription) {
        this.splunkDestinationDescription = splunkDestinationDescription;
        return this;
    }
}
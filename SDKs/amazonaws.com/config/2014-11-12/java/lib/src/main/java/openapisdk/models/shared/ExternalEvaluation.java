package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ExternalEvaluation
 * Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.
**/
public class ExternalEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Annotation")
    public String annotation;
    public ExternalEvaluation withAnnotation(String annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonProperty("ComplianceResourceId")
    public String complianceResourceId;
    public ExternalEvaluation withComplianceResourceId(String complianceResourceId) {
        this.complianceResourceId = complianceResourceId;
        return this;
    }
    @JsonProperty("ComplianceResourceType")
    public String complianceResourceType;
    public ExternalEvaluation withComplianceResourceType(String complianceResourceType) {
        this.complianceResourceType = complianceResourceType;
        return this;
    }
    @JsonProperty("ComplianceType")
    public ComplianceTypeEnum complianceType;
    public ExternalEvaluation withComplianceType(ComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("OrderingTimestamp")
    public OffsetDateTime orderingTimestamp;
    public ExternalEvaluation withOrderingTimestamp(OffsetDateTime orderingTimestamp) {
        this.orderingTimestamp = orderingTimestamp;
        return this;
    }
}
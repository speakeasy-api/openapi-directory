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
 * EvaluationResultIdentifier
 * Uniquely identifies an evaluation result.
**/
public class EvaluationResultIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResultQualifier")
    public EvaluationResultQualifier evaluationResultQualifier;
    public EvaluationResultIdentifier withEvaluationResultQualifier(EvaluationResultQualifier evaluationResultQualifier) {
        this.evaluationResultQualifier = evaluationResultQualifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("OrderingTimestamp")
    public OffsetDateTime orderingTimestamp;
    public EvaluationResultIdentifier withOrderingTimestamp(OffsetDateTime orderingTimestamp) {
        this.orderingTimestamp = orderingTimestamp;
        return this;
    }
}
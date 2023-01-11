package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetCustomerBalance200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_balance")
    public String accountBalance;
    public GetCustomerBalance200ApplicationJson withAccountBalance(String accountBalance) {
        this.accountBalance = accountBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("generated_at")
    public OffsetDateTime generatedAt;
    public GetCustomerBalance200ApplicationJson withGeneratedAt(OffsetDateTime generatedAt) {
        this.generatedAt = generatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month_to_date_balance")
    public String monthToDateBalance;
    public GetCustomerBalance200ApplicationJson withMonthToDateBalance(String monthToDateBalance) {
        this.monthToDateBalance = monthToDateBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month_to_date_usage")
    public String monthToDateUsage;
    public GetCustomerBalance200ApplicationJson withMonthToDateUsage(String monthToDateUsage) {
        this.monthToDateUsage = monthToDateUsage;
        return this;
    }
}
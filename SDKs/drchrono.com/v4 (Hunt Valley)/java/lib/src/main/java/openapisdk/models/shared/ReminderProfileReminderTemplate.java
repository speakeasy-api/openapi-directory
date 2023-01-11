package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReminderProfileReminderTemplate
 * Array of reminders
**/
public class ReminderProfileReminderTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public ReminderProfileReminderTemplate withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ReminderProfileReminderTemplateTypeEnum type;
    public ReminderProfileReminderTemplate withType(ReminderProfileReminderTemplateTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public ReminderProfileReminderTemplateUnitEnum unit;
    public ReminderProfileReminderTemplate withUnit(ReminderProfileReminderTemplateUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}
package shared

type ReminderProfileReminderTemplateTypeEnum string

const (
	ReminderProfileReminderTemplateTypeEnumEmail    ReminderProfileReminderTemplateTypeEnum = "email"
	ReminderProfileReminderTemplateTypeEnumSms      ReminderProfileReminderTemplateTypeEnum = "sms"
	ReminderProfileReminderTemplateTypeEnumPhone    ReminderProfileReminderTemplateTypeEnum = "phone"
	ReminderProfileReminderTemplateTypeEnumAutoCall ReminderProfileReminderTemplateTypeEnum = "auto_call"
)

type ReminderProfileReminderTemplateUnitEnum string

const (
	ReminderProfileReminderTemplateUnitEnumMinutes ReminderProfileReminderTemplateUnitEnum = "minutes"
	ReminderProfileReminderTemplateUnitEnumHours   ReminderProfileReminderTemplateUnitEnum = "hours"
	ReminderProfileReminderTemplateUnitEnumDays    ReminderProfileReminderTemplateUnitEnum = "days"
	ReminderProfileReminderTemplateUnitEnumWeeks   ReminderProfileReminderTemplateUnitEnum = "weeks"
)

// ReminderProfileReminderTemplate
// Array of reminders
type ReminderProfileReminderTemplate struct {
	Amount *int64                                   `json:"amount,omitempty"`
	Type   *ReminderProfileReminderTemplateTypeEnum `json:"type,omitempty"`
	Unit   *ReminderProfileReminderTemplateUnitEnum `json:"unit,omitempty"`
}

type ReminderProfile struct {
	Doctor    int64                             `json:"doctor"`
	ID        *int64                            `json:"id,omitempty"`
	Name      *string                           `json:"name,omitempty"`
	Reminders []ReminderProfileReminderTemplate `json:"reminders"`
}

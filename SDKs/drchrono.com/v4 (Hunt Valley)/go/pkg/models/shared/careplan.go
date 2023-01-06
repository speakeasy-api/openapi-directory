package shared

type CarePlanPlanTypeEnum string

const (
	CarePlanPlanTypeEnumOne   CarePlanPlanTypeEnum = "1"
	CarePlanPlanTypeEnumTwo   CarePlanPlanTypeEnum = "2"
	CarePlanPlanTypeEnumThree CarePlanPlanTypeEnum = "3"
	CarePlanPlanTypeEnumFour  CarePlanPlanTypeEnum = "4"
	CarePlanPlanTypeEnumFive  CarePlanPlanTypeEnum = "5"
	CarePlanPlanTypeEnumSix   CarePlanPlanTypeEnum = "6"
)

type CarePlan struct {
	Appointment   *string               `json:"appointment,omitempty"`
	Code          *string               `json:"code,omitempty"`
	CodeSystem    *string               `json:"code_system,omitempty"`
	CreatedAt     *string               `json:"created_at,omitempty"`
	Description   *string               `json:"description,omitempty"`
	ID            *int64                `json:"id,omitempty"`
	Instructions  *string               `json:"instructions,omitempty"`
	Patient       *string               `json:"patient,omitempty"`
	PlanType      *CarePlanPlanTypeEnum `json:"plan_type,omitempty"`
	ScheduledDate *string               `json:"scheduled_date,omitempty"`
	Title         *string               `json:"title,omitempty"`
	UpdatedAt     *string               `json:"updated_at,omitempty"`
}

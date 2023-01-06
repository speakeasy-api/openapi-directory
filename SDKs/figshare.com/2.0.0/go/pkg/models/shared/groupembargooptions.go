package shared

type GroupEmbargoOptionsTypeEnum string

const (
	GroupEmbargoOptionsTypeEnumLoggedIn      GroupEmbargoOptionsTypeEnum = "logged_in"
	GroupEmbargoOptionsTypeEnumIPRange       GroupEmbargoOptionsTypeEnum = "ip_range"
	GroupEmbargoOptionsTypeEnumAdministrator GroupEmbargoOptionsTypeEnum = "administrator"
)

type GroupEmbargoOptions struct {
	ID     *int64                       `json:"id,omitempty"`
	IPName *string                      `json:"ip_name,omitempty"`
	Type   *GroupEmbargoOptionsTypeEnum `json:"type,omitempty"`
}

package shared

type OptionsList struct {
	DBSecurityGroupMemberships  []map[string]interface{}
	OptionDescription           *string
	OptionName                  *string
	Port                        *int64
	VpcSecurityGroupMemberships []map[string]interface{}
}

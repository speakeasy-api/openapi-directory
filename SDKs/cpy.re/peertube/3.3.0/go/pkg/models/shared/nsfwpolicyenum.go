package shared

type NsfwPolicyEnum string

const (
	NSFWPolicyEnumDisplay   NsfwPolicyEnum = "display"
	NSFWPolicyEnumBlur      NsfwPolicyEnum = "blur"
	NSFWPolicyEnumDoNotList NsfwPolicyEnum = "do_not_list"
)

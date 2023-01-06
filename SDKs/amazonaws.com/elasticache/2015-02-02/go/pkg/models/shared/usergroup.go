package shared

type UserGroup struct {
	ARN               *string
	Engine            *string
	PendingChanges    *UserGroupPendingChanges
	ReplicationGroups []string
	Status            *string
	UserGroupID       *string
	UserIds           []string
}

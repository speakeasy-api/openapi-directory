package shared

// CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget
// One or more targets associated with the event window.
type CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget struct {
	DedicatedHostIds map[string]interface{}
	InstanceIds      map[string]interface{}
	Tags             map[string]interface{}
}

// CreateInstanceEventWindowResultInstanceEventWindow
// Information about the event window.
type CreateInstanceEventWindowResultInstanceEventWindow struct {
	AssociationTarget     *CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget
	CronExpression        map[string]interface{}
	InstanceEventWindowID map[string]interface{}
	Name                  map[string]interface{}
	State                 map[string]interface{}
	Tags                  map[string]interface{}
	TimeRanges            map[string]interface{}
}

type CreateInstanceEventWindowResult struct {
	InstanceEventWindow *CreateInstanceEventWindowResultInstanceEventWindow
}

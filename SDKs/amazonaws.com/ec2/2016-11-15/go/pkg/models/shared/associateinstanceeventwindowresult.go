package shared

// AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
// One or more targets associated with the event window.
type AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget struct {
	DedicatedHostIds map[string]interface{}
	InstanceIds      map[string]interface{}
	Tags             map[string]interface{}
}

// AssociateInstanceEventWindowResultInstanceEventWindow
// Information about the event window.
type AssociateInstanceEventWindowResultInstanceEventWindow struct {
	AssociationTarget     *AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
	CronExpression        map[string]interface{}
	InstanceEventWindowID map[string]interface{}
	Name                  map[string]interface{}
	State                 map[string]interface{}
	Tags                  map[string]interface{}
	TimeRanges            map[string]interface{}
}

type AssociateInstanceEventWindowResult struct {
	InstanceEventWindow *AssociateInstanceEventWindowResultInstanceEventWindow
}

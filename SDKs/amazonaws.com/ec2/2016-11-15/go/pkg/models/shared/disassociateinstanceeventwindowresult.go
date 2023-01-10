package shared

// DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
// One or more targets associated with the event window.
type DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget struct {
	DedicatedHostIds map[string]interface{}
	InstanceIds      map[string]interface{}
	Tags             map[string]interface{}
}

// DisassociateInstanceEventWindowResultInstanceEventWindow
// Information about the event window.
type DisassociateInstanceEventWindowResultInstanceEventWindow struct {
	AssociationTarget     *DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
	CronExpression        map[string]interface{}
	InstanceEventWindowID map[string]interface{}
	Name                  map[string]interface{}
	State                 map[string]interface{}
	Tags                  map[string]interface{}
	TimeRanges            map[string]interface{}
}

type DisassociateInstanceEventWindowResult struct {
	InstanceEventWindow *DisassociateInstanceEventWindowResultInstanceEventWindow
}

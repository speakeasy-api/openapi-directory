package shared

// ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget
// One or more targets associated with the event window.
type ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget struct {
	DedicatedHostIds map[string]interface{}
	InstanceIds      map[string]interface{}
	Tags             map[string]interface{}
}

// ModifyInstanceEventWindowResultInstanceEventWindow
// Information about the event window.
type ModifyInstanceEventWindowResultInstanceEventWindow struct {
	AssociationTarget     *ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget
	CronExpression        map[string]interface{}
	InstanceEventWindowID map[string]interface{}
	Name                  map[string]interface{}
	State                 map[string]interface{}
	Tags                  map[string]interface{}
	TimeRanges            map[string]interface{}
}

type ModifyInstanceEventWindowResult struct {
	InstanceEventWindow *ModifyInstanceEventWindowResultInstanceEventWindow
}

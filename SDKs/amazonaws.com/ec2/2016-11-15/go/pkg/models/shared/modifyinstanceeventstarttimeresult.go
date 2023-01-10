package shared

// ModifyInstanceEventStartTimeResultEvent
// Describes a scheduled event for an instance.
type ModifyInstanceEventStartTimeResultEvent struct {
	Code              map[string]interface{}
	Description       map[string]interface{}
	InstanceEventID   map[string]interface{}
	NotAfter          map[string]interface{}
	NotBefore         map[string]interface{}
	NotBeforeDeadline map[string]interface{}
}

type ModifyInstanceEventStartTimeResult struct {
	Event *ModifyInstanceEventStartTimeResultEvent
}

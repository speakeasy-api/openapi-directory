package shared

// DeleteInstanceEventWindowResultInstanceEventWindowState
// The state of the event window.
type DeleteInstanceEventWindowResultInstanceEventWindowState struct {
	InstanceEventWindowID map[string]interface{}
	State                 map[string]interface{}
}

type DeleteInstanceEventWindowResult struct {
	InstanceEventWindowState *DeleteInstanceEventWindowResultInstanceEventWindowState
}

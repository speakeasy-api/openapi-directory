package shared

// CPUUtilization
// CPU utilization metrics for an instance.
type CPUUtilization struct {
	IOWait     *float64
	IRQ        *float64
	Idle       *float64
	Nice       *float64
	Privileged *float64
	SoftIRQ    *float64
	System     *float64
	User       *float64
}

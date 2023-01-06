package shared

// Ec2InstanceCounts
// <p>Resource capacity settings. Fleet capacity is measured in EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.</p> <p>EC2 instance counts are part of <a>FleetCapacity</a>.</p>
type Ec2InstanceCounts struct {
	ACTIVE      *int64 `json:"ACTIVE,omitempty"`
	DESIRED     *int64 `json:"DESIRED,omitempty"`
	IDLE        *int64 `json:"IDLE,omitempty"`
	MAXIMUM     *int64 `json:"MAXIMUM,omitempty"`
	MINIMUM     *int64 `json:"MINIMUM,omitempty"`
	PENDING     *int64 `json:"PENDING,omitempty"`
	TERMINATING *int64 `json:"TERMINATING,omitempty"`
}

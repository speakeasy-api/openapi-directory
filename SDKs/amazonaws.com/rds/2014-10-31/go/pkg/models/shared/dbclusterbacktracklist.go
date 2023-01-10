package shared

import (
	"time"
)

// DbClusterBacktrackList
// This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
type DbClusterBacktrackList struct {
	BacktrackIdentifier          *string
	BacktrackRequestCreationTime *time.Time
	BacktrackTo                  *time.Time
	BacktrackedFrom              *time.Time
	DBClusterIdentifier          *string
	Status                       *string
}

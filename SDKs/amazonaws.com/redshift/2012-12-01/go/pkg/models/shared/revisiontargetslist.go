package shared

import (
	"time"
)

// RevisionTargetsList
// Describes a <code>RevisionTarget</code>.
type RevisionTargetsList struct {
	DatabaseRevision            *string
	DatabaseRevisionReleaseDate *time.Time
	Description                 *string
}

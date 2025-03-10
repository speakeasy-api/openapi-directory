// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// BackupLifecycleEnum - <p>The lifecycle status of the backup.</p> <ul> <li> <p> <code>AVAILABLE</code> - The backup is fully available.</p> </li> <li> <p> <code>PENDING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.</p> </li> <li> <p> <code>CREATING</code> - Amazon FSx is creating the new user-initiated backup.</p> </li> <li> <p> <code>TRANSFERRING</code> - For user-initiated backups on Lustre file systems only; Amazon FSx is backing up the file system.</p> </li> <li> <p> <code>COPYING</code> - Amazon FSx is copying the backup.</p> </li> <li> <p> <code>DELETED</code> - Amazon FSx deleted the backup and it's no longer available.</p> </li> <li> <p> <code>FAILED</code> - Amazon FSx couldn't finish the backup.</p> </li> </ul>
type BackupLifecycleEnum string

const (
	BackupLifecycleEnumAvailable    BackupLifecycleEnum = "AVAILABLE"
	BackupLifecycleEnumCreating     BackupLifecycleEnum = "CREATING"
	BackupLifecycleEnumTransferring BackupLifecycleEnum = "TRANSFERRING"
	BackupLifecycleEnumDeleted      BackupLifecycleEnum = "DELETED"
	BackupLifecycleEnumFailed       BackupLifecycleEnum = "FAILED"
	BackupLifecycleEnumPending      BackupLifecycleEnum = "PENDING"
	BackupLifecycleEnumCopying      BackupLifecycleEnum = "COPYING"
)

func (e BackupLifecycleEnum) ToPointer() *BackupLifecycleEnum {
	return &e
}

func (e *BackupLifecycleEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AVAILABLE":
		fallthrough
	case "CREATING":
		fallthrough
	case "TRANSFERRING":
		fallthrough
	case "DELETED":
		fallthrough
	case "FAILED":
		fallthrough
	case "PENDING":
		fallthrough
	case "COPYING":
		*e = BackupLifecycleEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for BackupLifecycleEnum: %v", v)
	}
}

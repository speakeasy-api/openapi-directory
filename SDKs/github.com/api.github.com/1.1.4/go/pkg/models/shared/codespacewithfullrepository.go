// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// CodespaceWithFullRepositoryGitStatus - Details about the codespace's git repository.
type CodespaceWithFullRepositoryGitStatus struct {
	// The number of commits the local repository is ahead of the remote.
	Ahead *int64 `json:"ahead,omitempty"`
	// The number of commits the local repository is behind the remote.
	Behind *int64 `json:"behind,omitempty"`
	// Whether the local repository has uncommitted changes.
	HasUncommittedChanges *bool `json:"has_uncommitted_changes,omitempty"`
	// Whether the local repository has unpushed changes.
	HasUnpushedChanges *bool `json:"has_unpushed_changes,omitempty"`
	// The current branch (or SHA if in detached HEAD state) of the local repository.
	Ref *string `json:"ref,omitempty"`
}

// CodespaceWithFullRepositoryLocationEnum - The Azure region where this codespace is located.
type CodespaceWithFullRepositoryLocationEnum string

const (
	CodespaceWithFullRepositoryLocationEnumEastUs        CodespaceWithFullRepositoryLocationEnum = "EastUs"
	CodespaceWithFullRepositoryLocationEnumSouthEastAsia CodespaceWithFullRepositoryLocationEnum = "SouthEastAsia"
	CodespaceWithFullRepositoryLocationEnumWestEurope    CodespaceWithFullRepositoryLocationEnum = "WestEurope"
	CodespaceWithFullRepositoryLocationEnumWestUs2       CodespaceWithFullRepositoryLocationEnum = "WestUs2"
)

func (e CodespaceWithFullRepositoryLocationEnum) ToPointer() *CodespaceWithFullRepositoryLocationEnum {
	return &e
}

func (e *CodespaceWithFullRepositoryLocationEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "EastUs":
		fallthrough
	case "SouthEastAsia":
		fallthrough
	case "WestEurope":
		fallthrough
	case "WestUs2":
		*e = CodespaceWithFullRepositoryLocationEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CodespaceWithFullRepositoryLocationEnum: %v", v)
	}
}

type CodespaceWithFullRepositoryRuntimeConstraints struct {
	// The privacy settings a user can select from when forwarding a port.
	AllowedPortPrivacySettings []string `json:"allowed_port_privacy_settings,omitempty"`
}

// CodespaceWithFullRepositoryStateEnum - State of this codespace.
type CodespaceWithFullRepositoryStateEnum string

const (
	CodespaceWithFullRepositoryStateEnumUnknown      CodespaceWithFullRepositoryStateEnum = "Unknown"
	CodespaceWithFullRepositoryStateEnumCreated      CodespaceWithFullRepositoryStateEnum = "Created"
	CodespaceWithFullRepositoryStateEnumQueued       CodespaceWithFullRepositoryStateEnum = "Queued"
	CodespaceWithFullRepositoryStateEnumProvisioning CodespaceWithFullRepositoryStateEnum = "Provisioning"
	CodespaceWithFullRepositoryStateEnumAvailable    CodespaceWithFullRepositoryStateEnum = "Available"
	CodespaceWithFullRepositoryStateEnumAwaiting     CodespaceWithFullRepositoryStateEnum = "Awaiting"
	CodespaceWithFullRepositoryStateEnumUnavailable  CodespaceWithFullRepositoryStateEnum = "Unavailable"
	CodespaceWithFullRepositoryStateEnumDeleted      CodespaceWithFullRepositoryStateEnum = "Deleted"
	CodespaceWithFullRepositoryStateEnumMoved        CodespaceWithFullRepositoryStateEnum = "Moved"
	CodespaceWithFullRepositoryStateEnumShutdown     CodespaceWithFullRepositoryStateEnum = "Shutdown"
	CodespaceWithFullRepositoryStateEnumArchived     CodespaceWithFullRepositoryStateEnum = "Archived"
	CodespaceWithFullRepositoryStateEnumStarting     CodespaceWithFullRepositoryStateEnum = "Starting"
	CodespaceWithFullRepositoryStateEnumShuttingDown CodespaceWithFullRepositoryStateEnum = "ShuttingDown"
	CodespaceWithFullRepositoryStateEnumFailed       CodespaceWithFullRepositoryStateEnum = "Failed"
	CodespaceWithFullRepositoryStateEnumExporting    CodespaceWithFullRepositoryStateEnum = "Exporting"
	CodespaceWithFullRepositoryStateEnumUpdating     CodespaceWithFullRepositoryStateEnum = "Updating"
	CodespaceWithFullRepositoryStateEnumRebuilding   CodespaceWithFullRepositoryStateEnum = "Rebuilding"
)

func (e CodespaceWithFullRepositoryStateEnum) ToPointer() *CodespaceWithFullRepositoryStateEnum {
	return &e
}

func (e *CodespaceWithFullRepositoryStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Unknown":
		fallthrough
	case "Created":
		fallthrough
	case "Queued":
		fallthrough
	case "Provisioning":
		fallthrough
	case "Available":
		fallthrough
	case "Awaiting":
		fallthrough
	case "Unavailable":
		fallthrough
	case "Deleted":
		fallthrough
	case "Moved":
		fallthrough
	case "Shutdown":
		fallthrough
	case "Archived":
		fallthrough
	case "Starting":
		fallthrough
	case "ShuttingDown":
		fallthrough
	case "Failed":
		fallthrough
	case "Exporting":
		fallthrough
	case "Updating":
		fallthrough
	case "Rebuilding":
		*e = CodespaceWithFullRepositoryStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CodespaceWithFullRepositoryStateEnum: %v", v)
	}
}

// CodespaceWithFullRepository - A codespace.
type CodespaceWithFullRepository struct {
	// A GitHub user.
	BillableOwner SimpleUser `json:"billable_owner"`
	CreatedAt     time.Time  `json:"created_at"`
	// Path to devcontainer.json from repo root used to create Codespace.
	DevcontainerPath *string `json:"devcontainer_path,omitempty"`
	// Display name for this codespace.
	DisplayName *string `json:"display_name,omitempty"`
	// UUID identifying this codespace's environment.
	EnvironmentID string `json:"environment_id"`
	// Details about the codespace's git repository.
	GitStatus CodespaceWithFullRepositoryGitStatus `json:"git_status"`
	ID        int64                                `json:"id"`
	// The number of minutes of inactivity after which this codespace will be automatically stopped.
	IdleTimeoutMinutes int64 `json:"idle_timeout_minutes"`
	// Text to show user when codespace idle timeout minutes has been overriden by an organization policy
	IdleTimeoutNotice *string `json:"idle_timeout_notice,omitempty"`
	// Last known time this codespace was started.
	LastUsedAt time.Time `json:"last_used_at"`
	// The Azure region where this codespace is located.
	Location CodespaceWithFullRepositoryLocationEnum `json:"location"`
	// A description of the machine powering a codespace.
	Machine NullableCodespaceMachine `json:"machine"`
	// API URL to access available alternate machine types for this codespace.
	MachinesURL string `json:"machines_url"`
	// Automatically generated name of this codespace.
	Name string `json:"name"`
	// A GitHub user.
	Owner SimpleUser `json:"owner"`
	// Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
	PendingOperation *bool `json:"pending_operation,omitempty"`
	// Text to show user when codespace is disabled by a pending operation
	PendingOperationDisabledReason *string `json:"pending_operation_disabled_reason,omitempty"`
	// Whether the codespace was created from a prebuild.
	Prebuild bool `json:"prebuild"`
	// API URL to publish this codespace to a new repository.
	PublishURL *string `json:"publish_url,omitempty"`
	// API URL for the Pull Request associated with this codespace, if any.
	PullsURL      string   `json:"pulls_url"`
	RecentFolders []string `json:"recent_folders"`
	// Full Repository
	Repository FullRepository `json:"repository"`
	// When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
	RetentionExpiresAt *time.Time `json:"retention_expires_at,omitempty"`
	// Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
	RetentionPeriodMinutes *int64                                         `json:"retention_period_minutes,omitempty"`
	RuntimeConstraints     *CodespaceWithFullRepositoryRuntimeConstraints `json:"runtime_constraints,omitempty"`
	// API URL to start this codespace.
	StartURL string `json:"start_url"`
	// State of this codespace.
	State CodespaceWithFullRepositoryStateEnum `json:"state"`
	// API URL to stop this codespace.
	StopURL   string    `json:"stop_url"`
	UpdatedAt time.Time `json:"updated_at"`
	// API URL for this codespace.
	URL string `json:"url"`
	// URL to access this codespace on the web.
	WebURL string `json:"web_url"`
}

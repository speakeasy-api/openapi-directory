// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ShareInvitation - The share invitation.
type ShareInvitation struct {
	// <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
	LensAlias         *string                `json:"LensAlias,omitempty"`
	LensArn           *string                `json:"LensArn,omitempty"`
	ShareInvitationID *string                `json:"ShareInvitationId,omitempty"`
	ShareResourceType *ShareResourceTypeEnum `json:"ShareResourceType,omitempty"`
	// The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
	WorkloadID *string `json:"WorkloadId,omitempty"`
}

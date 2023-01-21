package shared

// DestinyResponsesDestinyErrorProfileInfoCard
// This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
type DestinyResponsesDestinyErrorProfileInfoCard struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyResponsesDestinyErrorProfile
// If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
// Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
type DestinyResponsesDestinyErrorProfile struct {
	ErrorCode *int32
	InfoCard  *DestinyResponsesDestinyErrorProfileInfoCard
}

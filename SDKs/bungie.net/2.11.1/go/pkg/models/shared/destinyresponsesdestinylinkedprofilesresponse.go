package shared

// DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
// This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
type DestinyResponsesDestinyLinkedProfilesResponseBnetMembership struct {
	ApplicableMembershipTypes []int32
	CrossSaveOverride         *int32
	DisplayName               *string
	IconPath                  *string
	IsPublic                  *bool
	MembershipID              *int64
	MembershipType            *int32
	SupplementalDisplayName   *string
}

// DestinyResponsesDestinyLinkedProfilesResponse
// I know what you seek. You seek linked accounts. Found them, you have.
// This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
type DestinyResponsesDestinyLinkedProfilesResponse struct {
	BnetMembership     *DestinyResponsesDestinyLinkedProfilesResponseBnetMembership
	Profiles           []DestinyResponsesDestinyProfileUserInfoCard
	ProfilesWithErrors []DestinyResponsesDestinyErrorProfile
}

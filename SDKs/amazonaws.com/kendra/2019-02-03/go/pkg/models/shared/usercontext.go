package shared

// UserContext
// <p>Provides information about the user context for a Amazon Kendra index.</p> <p>This is used for filtering search results for different users based on their access to documents.</p> <p>You provide one of the following:</p> <ul> <li> <p>User token</p> </li> <li> <p>User ID, the groups the user belongs to, and the data sources the groups can access</p> </li> </ul> <p>If you provide both, an exception is thrown.</p>
type UserContext struct {
	DataSourceGroups []DataSourceGroup `json:"DataSourceGroups,omitempty"`
	Groups           []string          `json:"Groups,omitempty"`
	Token            *string           `json:"Token,omitempty"`
	UserID           *string           `json:"UserId,omitempty"`
}

package shared

type AccountInfo struct {
	CompanyInfo       *CompanyInfo               `json:"companyInfo,omitempty"`
	Email             string                     `json:"email"`
	Info              *BeezUpCommonInfoSummaries `json:"info,omitempty"`
	Links             AccountInfoLinks           `json:"links"`
	PersonalInfo      *PersonalInfo              `json:"personalInfo,omitempty"`
	ProfilePictureURL *string                    `json:"profilePictureUrl,omitempty"`
	Status            AccountStatusEnum          `json:"status"`
	UserID            string                     `json:"userId"`
}

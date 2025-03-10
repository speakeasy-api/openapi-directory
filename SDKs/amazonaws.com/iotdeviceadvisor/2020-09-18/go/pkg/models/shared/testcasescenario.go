// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// TestCaseScenario - Provides test case scenario.
type TestCaseScenario struct {
	Failure              *string                     `json:"failure,omitempty"`
	Status               *TestCaseScenarioStatusEnum `json:"status,omitempty"`
	SystemMessage        *string                     `json:"systemMessage,omitempty"`
	TestCaseScenarioID   *string                     `json:"testCaseScenarioId,omitempty"`
	TestCaseScenarioType *TestCaseScenarioTypeEnum   `json:"testCaseScenarioType,omitempty"`
}

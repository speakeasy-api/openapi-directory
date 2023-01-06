package shared

type UpdateIPSetRequest struct {
	ChangeToken string                 `json:"ChangeToken"`
	IPSetID     map[string]interface{} `json:"IPSetId"`
	Updates     []IPSetUpdate          `json:"Updates"`
}

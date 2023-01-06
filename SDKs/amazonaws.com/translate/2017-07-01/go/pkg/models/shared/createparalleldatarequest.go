package shared

type CreateParallelDataRequest struct {
	ClientToken        string                 `json:"ClientToken"`
	Description        map[string]interface{} `json:"Description,omitempty"`
	EncryptionKey      *EncryptionKey         `json:"EncryptionKey,omitempty"`
	Name               string                 `json:"Name"`
	ParallelDataConfig ParallelDataConfig     `json:"ParallelDataConfig"`
}

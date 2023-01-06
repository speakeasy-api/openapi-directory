package shared

type GetConnectivityInfoResponse struct {
	ConnectivityInfo []ConnectivityInfo     `json:"ConnectivityInfo,omitempty"`
	Message          map[string]interface{} `json:"Message,omitempty"`
}

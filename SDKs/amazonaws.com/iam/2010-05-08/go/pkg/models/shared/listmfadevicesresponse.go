package shared

// ListMfaDevicesResponse
// Contains the response to a successful <a>ListMFADevices</a> request.
type ListMfaDevicesResponse struct {
	IsTruncated *bool
	MFADevices  []MfaDevice
	Marker      *string
}

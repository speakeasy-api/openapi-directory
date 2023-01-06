package shared

type DeviceInfoFirmwareInfo struct {
	DownloadURL *string `json:"download_url,omitempty"`
	Name        *string `json:"name,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Sha2        *string `json:"sha2,omitempty"`
	Version     *string `json:"version,omitempty"`
}

type DeviceInfo struct {
	CveList            []Vulnerability         `json:"cve_list,omitempty"`
	DeviceType         *string                 `json:"device_type,omitempty"`
	FirmwareInfo       *DeviceInfoFirmwareInfo `json:"firmware_info,omitempty"`
	FirmwareVersion    *string                 `json:"firmware_version,omitempty"`
	IsDiscontinued     *bool                   `json:"is_discontinued,omitempty"`
	LatestFirmwareInfo *DeviceInfoFirmwareInfo `json:"latest_firmware_info,omitempty"`
	Manufacturer       *string                 `json:"manufacturer,omitempty"`
	ModelName          *string                 `json:"model_name,omitempty"`
}

package shared

type ImportWorkspaceImageRequest struct {
	Applications     []ApplicationEnum                  `json:"Applications,omitempty"`
	Ec2ImageID       map[string]interface{}             `json:"Ec2ImageId"`
	ImageDescription string                             `json:"ImageDescription"`
	ImageName        string                             `json:"ImageName"`
	IngestionProcess WorkspaceImageIngestionProcessEnum `json:"IngestionProcess"`
	Tags             []Tag                              `json:"Tags,omitempty"`
}

// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DatasetDetailOrgAttributes - Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus).
type DatasetDetailOrgAttributes struct {
	Gdg  *GdgDetailAttributes  `json:"gdg,omitempty"`
	Vsam *VsamDetailAttributes `json:"vsam,omitempty"`
}

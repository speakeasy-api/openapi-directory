// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CreateFlywheelRequest struct {
	ActiveModelArn     *string             `json:"ActiveModelArn,omitempty"`
	ClientRequestToken *string             `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn  string              `json:"DataAccessRoleArn"`
	DataLakeS3URI      string              `json:"DataLakeS3Uri"`
	DataSecurityConfig *DataSecurityConfig `json:"DataSecurityConfig,omitempty"`
	FlywheelName       string              `json:"FlywheelName"`
	ModelType          *ModelTypeEnum      `json:"ModelType,omitempty"`
	Tags               []Tag               `json:"Tags,omitempty"`
	TaskConfig         *TaskConfig         `json:"TaskConfig,omitempty"`
}

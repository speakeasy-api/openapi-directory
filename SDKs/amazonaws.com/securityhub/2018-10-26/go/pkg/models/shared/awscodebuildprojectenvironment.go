// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AwsCodeBuildProjectEnvironment - Information about the build environment for this build project.
type AwsCodeBuildProjectEnvironment struct {
	Certificate              *string                                                     `json:"Certificate,omitempty"`
	EnvironmentVariables     []AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails `json:"EnvironmentVariables,omitempty"`
	ImagePullCredentialsType *string                                                     `json:"ImagePullCredentialsType,omitempty"`
	PrivilegedMode           *bool                                                       `json:"PrivilegedMode,omitempty"`
	RegistryCredential       *AwsCodeBuildProjectEnvironmentRegistryCredential           `json:"RegistryCredential,omitempty"`
	Type                     *string                                                     `json:"Type,omitempty"`
}

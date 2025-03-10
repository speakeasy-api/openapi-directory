// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ImageConfiguration - Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.
type ImageConfiguration struct {
	Port                        *string           `json:"Port,omitempty"`
	RuntimeEnvironmentSecrets   map[string]string `json:"RuntimeEnvironmentSecrets,omitempty"`
	RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables,omitempty"`
	StartCommand                *string           `json:"StartCommand,omitempty"`
}

package shared

// ApplicationConfigurationDescription1
// Describes details about the application code and starting parameters for a Kinesis Data Analytics application.
type ApplicationConfigurationDescription1 struct {
	ApplicationCodeConfigurationDescription     *ApplicationCodeConfigurationDescription     `json:"ApplicationCodeConfigurationDescription,omitempty"`
	ApplicationSnapshotConfigurationDescription *ApplicationSnapshotConfigurationDescription `json:"ApplicationSnapshotConfigurationDescription,omitempty"`
	EnvironmentPropertyDescriptions             *EnvironmentPropertyDescriptions             `json:"EnvironmentPropertyDescriptions,omitempty"`
	FlinkApplicationConfigurationDescription    *FlinkApplicationConfigurationDescription    `json:"FlinkApplicationConfigurationDescription,omitempty"`
	RunConfigurationDescription                 *RunConfigurationDescription                 `json:"RunConfigurationDescription,omitempty"`
	SQLApplicationConfigurationDescription      *SQLApplicationConfigurationDescription1     `json:"SqlApplicationConfigurationDescription,omitempty"`
	VpcConfigurationDescriptions                []VpcConfigurationDescription                `json:"VpcConfigurationDescriptions,omitempty"`
	ZeppelinApplicationConfigurationDescription *ZeppelinApplicationConfigurationDescription `json:"ZeppelinApplicationConfigurationDescription,omitempty"`
}

package shared

// InstallationMediaList
// Contains the installation media for a DB engine that requires an on-premises customer provided license, such as Microsoft SQL Server.
type InstallationMediaList struct {
	CustomAvailabilityZoneID    *string
	Engine                      *string
	EngineInstallationMediaPath *string
	EngineVersion               *string
	FailureCause                *InstallationMediaFailureCause
	InstallationMediaID         *string
	OSInstallationMediaPath     *string
	Status                      *string
}

package shared

// ImportVolumeResultConversionTaskImportInstance
// If the task is for importing an instance, this contains information about the import instance task.
type ImportVolumeResultConversionTaskImportInstance struct {
	Description map[string]interface{}
	InstanceID  map[string]interface{}
	Platform    map[string]interface{}
	Volumes     map[string]interface{}
}

// ImportVolumeResultConversionTaskImportVolumeImage
// The image.
type ImportVolumeResultConversionTaskImportVolumeImage struct {
	Checksum          map[string]interface{}
	Format            map[string]interface{}
	ImportManifestURL map[string]interface{}
	Size              map[string]interface{}
}

// ImportVolumeResultConversionTaskImportVolumeVolume
// The volume.
type ImportVolumeResultConversionTaskImportVolumeVolume struct {
	ID   map[string]interface{}
	Size map[string]interface{}
}

// ImportVolumeResultConversionTaskImportVolume
// If the task is for importing a volume, this contains information about the import volume task.
type ImportVolumeResultConversionTaskImportVolume struct {
	AvailabilityZone map[string]interface{}
	BytesConverted   map[string]interface{}
	Description      map[string]interface{}
	Image            *ImportVolumeResultConversionTaskImportVolumeImage
	Volume           *ImportVolumeResultConversionTaskImportVolumeVolume
}

// ImportVolumeResultConversionTask
// Information about the conversion task.
type ImportVolumeResultConversionTask struct {
	ConversionTaskID map[string]interface{}
	ExpirationTime   map[string]interface{}
	ImportInstance   *ImportVolumeResultConversionTaskImportInstance
	ImportVolume     *ImportVolumeResultConversionTaskImportVolume
	State            map[string]interface{}
	StatusMessage    map[string]interface{}
	Tags             map[string]interface{}
}

type ImportVolumeResult struct {
	ConversionTask *ImportVolumeResultConversionTask
}

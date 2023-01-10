package shared

// ImportInstanceResultConversionTaskImportInstance
// If the task is for importing an instance, this contains information about the import instance task.
type ImportInstanceResultConversionTaskImportInstance struct {
	Description map[string]interface{}
	InstanceID  map[string]interface{}
	Platform    map[string]interface{}
	Volumes     map[string]interface{}
}

// ImportInstanceResultConversionTaskImportVolumeImage
// The image.
type ImportInstanceResultConversionTaskImportVolumeImage struct {
	Checksum          map[string]interface{}
	Format            map[string]interface{}
	ImportManifestURL map[string]interface{}
	Size              map[string]interface{}
}

// ImportInstanceResultConversionTaskImportVolumeVolume
// The volume.
type ImportInstanceResultConversionTaskImportVolumeVolume struct {
	ID   map[string]interface{}
	Size map[string]interface{}
}

// ImportInstanceResultConversionTaskImportVolume
// If the task is for importing a volume, this contains information about the import volume task.
type ImportInstanceResultConversionTaskImportVolume struct {
	AvailabilityZone map[string]interface{}
	BytesConverted   map[string]interface{}
	Description      map[string]interface{}
	Image            *ImportInstanceResultConversionTaskImportVolumeImage
	Volume           *ImportInstanceResultConversionTaskImportVolumeVolume
}

// ImportInstanceResultConversionTask
// Information about the conversion task.
type ImportInstanceResultConversionTask struct {
	ConversionTaskID map[string]interface{}
	ExpirationTime   map[string]interface{}
	ImportInstance   *ImportInstanceResultConversionTaskImportInstance
	ImportVolume     *ImportInstanceResultConversionTaskImportVolume
	State            map[string]interface{}
	StatusMessage    map[string]interface{}
	Tags             map[string]interface{}
}

type ImportInstanceResult struct {
	ConversionTask *ImportInstanceResultConversionTask
}

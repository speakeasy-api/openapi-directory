package shared

import (
	"time"
)

type Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems struct {
	CreatedAt     time.Time `json:"created_at"`
	MinDiskSize   int64     `json:"min_disk_size"`
	Name          string    `json:"name"`
	Regions       []string  `json:"regions"`
	SizeGigabytes float32   `json:"size_gigabytes"`
}

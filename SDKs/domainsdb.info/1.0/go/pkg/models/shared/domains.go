package shared

import (
	"time"
)

type Domains struct {
	A          []string    `json:"A,omitempty"`
	CNAME      []string    `json:"CNAME,omitempty"`
	MX         []MxRecords `json:"MX,omitempty"`
	NS         []string    `json:"NS,omitempty"`
	TXT        []string    `json:"TXT,omitempty"`
	Country    *string     `json:"country,omitempty"`
	CreateDate *time.Time  `json:"create_date,omitempty"`
	Domain     *string     `json:"domain,omitempty"`
	IsDead     *string     `json:"isDead,omitempty"`
	UpdateDate *time.Time  `json:"update_date,omitempty"`
}

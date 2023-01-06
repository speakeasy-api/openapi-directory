package shared

import (
	"time"
)

type ErrorSummary struct {
	ErrorArguments        map[string]string `json:"errorArguments,omitempty"`
	ErrorCode             *string           `json:"errorCode,omitempty"`
	ErrorGUID             *string           `json:"errorGuid,omitempty"`
	ErrorMessage          *string           `json:"errorMessage,omitempty"`
	ExceptionDetail       *ExceptionDetail  `json:"exceptionDetail,omitempty"`
	ObjectName            *string           `json:"objectName,omitempty"`
	PropertyName          *string           `json:"propertyName,omitempty"`
	PropertyValue         *string           `json:"propertyValue,omitempty"`
	Source                *string           `json:"source,omitempty"`
	TechnicalErrorMessage *string           `json:"technicalErrorMessage,omitempty"`
	UtcDate               *time.Time        `json:"utcDate,omitempty"`
}

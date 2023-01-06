package shared

type LogLevelEnum string

const (
	LogLevelEnumDebug   LogLevelEnum = "DEBUG"
	LogLevelEnumTrace   LogLevelEnum = "TRACE"
	LogLevelEnumWarn    LogLevelEnum = "WARN"
	LogLevelEnumError   LogLevelEnum = "ERROR"
	LogLevelEnumSevere  LogLevelEnum = "SEVERE"
	LogLevelEnumWarning LogLevelEnum = "WARNING"
	LogLevelEnumInfo    LogLevelEnum = "INFO"
	LogLevelEnumConfig  LogLevelEnum = "CONFIG"
	LogLevelEnumFine    LogLevelEnum = "FINE"
	LogLevelEnumFiner   LogLevelEnum = "FINER"
	LogLevelEnumFinest  LogLevelEnum = "FINEST"
)

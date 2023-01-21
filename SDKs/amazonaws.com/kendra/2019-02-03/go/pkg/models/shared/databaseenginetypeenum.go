package shared

type DatabaseEngineTypeEnum string

const (
	DatabaseEngineTypeEnumRdsAuroraMysql      DatabaseEngineTypeEnum = "RDS_AURORA_MYSQL"
	DatabaseEngineTypeEnumRdsAuroraPostgresql DatabaseEngineTypeEnum = "RDS_AURORA_POSTGRESQL"
	DatabaseEngineTypeEnumRdsMysql            DatabaseEngineTypeEnum = "RDS_MYSQL"
	DatabaseEngineTypeEnumRdsPostgresql       DatabaseEngineTypeEnum = "RDS_POSTGRESQL"
)

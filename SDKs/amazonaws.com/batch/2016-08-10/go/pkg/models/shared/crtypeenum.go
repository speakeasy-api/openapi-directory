package shared

type CrTypeEnum string

const (
	CRTypeEnumEc2         CrTypeEnum = "EC2"
	CRTypeEnumSpot        CrTypeEnum = "SPOT"
	CRTypeEnumFargate     CrTypeEnum = "FARGATE"
	CRTypeEnumFargateSpot CrTypeEnum = "FARGATE_SPOT"
)

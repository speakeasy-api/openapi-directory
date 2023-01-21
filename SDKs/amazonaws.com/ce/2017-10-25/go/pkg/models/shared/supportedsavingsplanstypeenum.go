package shared

type SupportedSavingsPlansTypeEnum string

const (
	SupportedSavingsPlansTypeEnumComputeSp     SupportedSavingsPlansTypeEnum = "COMPUTE_SP"
	SupportedSavingsPlansTypeEnumEc2InstanceSp SupportedSavingsPlansTypeEnum = "EC2_INSTANCE_SP"
	SupportedSavingsPlansTypeEnumSagemakerSp   SupportedSavingsPlansTypeEnum = "SAGEMAKER_SP"
)

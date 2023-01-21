package shared

type AutoMlJobSecondaryStatusEnum string

const (
	AutoMLJobSecondaryStatusEnumStarting                       AutoMlJobSecondaryStatusEnum = "Starting"
	AutoMLJobSecondaryStatusEnumAnalyzingData                  AutoMlJobSecondaryStatusEnum = "AnalyzingData"
	AutoMLJobSecondaryStatusEnumFeatureEngineering             AutoMlJobSecondaryStatusEnum = "FeatureEngineering"
	AutoMLJobSecondaryStatusEnumModelTuning                    AutoMlJobSecondaryStatusEnum = "ModelTuning"
	AutoMLJobSecondaryStatusEnumMaxCandidatesReached           AutoMlJobSecondaryStatusEnum = "MaxCandidatesReached"
	AutoMLJobSecondaryStatusEnumFailed                         AutoMlJobSecondaryStatusEnum = "Failed"
	AutoMLJobSecondaryStatusEnumStopped                        AutoMlJobSecondaryStatusEnum = "Stopped"
	AutoMLJobSecondaryStatusEnumMaxAutoMlJobRuntimeReached     AutoMlJobSecondaryStatusEnum = "MaxAutoMLJobRuntimeReached"
	AutoMLJobSecondaryStatusEnumStopping                       AutoMlJobSecondaryStatusEnum = "Stopping"
	AutoMLJobSecondaryStatusEnumCandidateDefinitionsGenerated  AutoMlJobSecondaryStatusEnum = "CandidateDefinitionsGenerated"
	AutoMLJobSecondaryStatusEnumGeneratingExplainabilityReport AutoMlJobSecondaryStatusEnum = "GeneratingExplainabilityReport"
	AutoMLJobSecondaryStatusEnumCompleted                      AutoMlJobSecondaryStatusEnum = "Completed"
	AutoMLJobSecondaryStatusEnumExplainabilityError            AutoMlJobSecondaryStatusEnum = "ExplainabilityError"
	AutoMLJobSecondaryStatusEnumDeployingModel                 AutoMlJobSecondaryStatusEnum = "DeployingModel"
	AutoMLJobSecondaryStatusEnumModelDeploymentError           AutoMlJobSecondaryStatusEnum = "ModelDeploymentError"
)

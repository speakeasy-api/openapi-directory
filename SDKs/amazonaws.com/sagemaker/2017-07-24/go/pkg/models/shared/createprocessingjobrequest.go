// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CreateProcessingJobRequest struct {
	AppSpecification AppSpecification  `json:"AppSpecification"`
	Environment      map[string]string `json:"Environment,omitempty"`
	// <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateProcessingJob.html">CreateProcessingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html">CreateTrainingJob</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTransformJob.html">CreateTransformJob</a> </p> </li> </ul>
	ExperimentConfig       *ExperimentConfig            `json:"ExperimentConfig,omitempty"`
	NetworkConfig          *NetworkConfig               `json:"NetworkConfig,omitempty"`
	ProcessingInputs       []ProcessingInput            `json:"ProcessingInputs,omitempty"`
	ProcessingJobName      string                       `json:"ProcessingJobName"`
	ProcessingOutputConfig *ProcessingOutputConfig      `json:"ProcessingOutputConfig,omitempty"`
	ProcessingResources    ProcessingResources          `json:"ProcessingResources"`
	RoleArn                string                       `json:"RoleArn"`
	StoppingCondition      *ProcessingStoppingCondition `json:"StoppingCondition,omitempty"`
	Tags                   []Tag                        `json:"Tags,omitempty"`
}

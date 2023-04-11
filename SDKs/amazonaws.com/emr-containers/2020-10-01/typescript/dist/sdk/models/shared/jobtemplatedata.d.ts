import { SpeakeasyBase } from "../../../internal/utils";
import { JobDriver } from "./jobdriver";
import { ParametricConfigurationOverrides } from "./parametricconfigurationoverrides";
import { TemplateParameterConfiguration } from "./templateparameterconfiguration";
/**
 * The values of StartJobRun API requests used in job runs started using the job template.
 */
export declare class JobTemplateData extends SpeakeasyBase {
    configurationOverrides?: ParametricConfigurationOverrides;
    executionRoleArn: string;
    /**
     * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
     */
    jobDriver: JobDriver;
    jobTags?: Record<string, string>;
    parameterConfiguration?: Record<string, TemplateParameterConfiguration>;
    releaseLabel: string;
}

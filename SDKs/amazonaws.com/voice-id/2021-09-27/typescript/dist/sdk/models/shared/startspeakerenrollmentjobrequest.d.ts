import { SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentConfig } from "./enrollmentconfig";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
export declare class StartSpeakerEnrollmentJobRequest extends SpeakeasyBase {
    clientToken?: string;
    dataAccessRoleArn: string;
    domainId: string;
    enrollmentConfig?: EnrollmentConfig;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
}

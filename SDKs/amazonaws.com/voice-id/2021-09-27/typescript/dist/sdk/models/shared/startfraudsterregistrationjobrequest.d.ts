import { SpeakeasyBase } from "../../../internal/utils";
import { InputDataConfig } from "./inputdataconfig";
import { OutputDataConfig } from "./outputdataconfig";
import { RegistrationConfig } from "./registrationconfig";
export declare class StartFraudsterRegistrationJobRequest extends SpeakeasyBase {
    clientToken?: string;
    dataAccessRoleArn: string;
    domainId: string;
    inputDataConfig: InputDataConfig;
    jobName?: string;
    outputDataConfig: OutputDataConfig;
    registrationConfig?: RegistrationConfig;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { EngineConfiguration } from "./engineconfiguration";
export declare class StartSessionRequest extends SpeakeasyBase {
    clientRequestToken?: string;
    description?: string;
    engineConfiguration: EngineConfiguration;
    notebookVersion?: string;
    sessionIdleTimeoutInMinutes?: number;
    workGroup: string;
}

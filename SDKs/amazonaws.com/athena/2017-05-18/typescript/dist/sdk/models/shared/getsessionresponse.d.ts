import { SpeakeasyBase } from "../../../internal/utils";
import { EngineConfiguration } from "./engineconfiguration";
import { SessionConfiguration } from "./sessionconfiguration";
import { SessionStatistics } from "./sessionstatistics";
import { SessionStatus } from "./sessionstatus";
/**
 * Success
 */
export declare class GetSessionResponse extends SpeakeasyBase {
    description?: string;
    engineConfiguration?: EngineConfiguration;
    engineVersion?: string;
    notebookVersion?: string;
    sessionConfiguration?: SessionConfiguration;
    sessionId?: string;
    statistics?: SessionStatistics;
    status?: SessionStatus;
    workGroup?: string;
}

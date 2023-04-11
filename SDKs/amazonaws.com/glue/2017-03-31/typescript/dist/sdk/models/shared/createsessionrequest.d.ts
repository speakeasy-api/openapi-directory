import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionsList } from "./connectionslist";
import { SessionCommand } from "./sessioncommand";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * Request to create a new session.
 */
export declare class CreateSessionRequest extends SpeakeasyBase {
    command: SessionCommand;
    connections?: ConnectionsList;
    defaultArguments?: Record<string, string>;
    description?: string;
    glueVersion?: string;
    id: string;
    idleTimeout?: number;
    maxCapacity?: number;
    numberOfWorkers?: number;
    requestOrigin?: string;
    role: string;
    securityConfiguration?: string;
    tags?: Record<string, string>;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}

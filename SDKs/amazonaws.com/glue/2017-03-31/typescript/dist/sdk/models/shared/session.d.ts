import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionsList } from "./connectionslist";
import { SessionCommand } from "./sessioncommand";
import { SessionStatusEnum } from "./sessionstatusenum";
/**
 * The period in which a remote Spark runtime environment is running.
 */
export declare class Session extends SpeakeasyBase {
    command?: SessionCommand;
    connections?: ConnectionsList;
    createdOn?: Date;
    defaultArguments?: Record<string, string>;
    description?: string;
    errorMessage?: string;
    glueVersion?: string;
    id?: string;
    maxCapacity?: number;
    progress?: number;
    role?: string;
    securityConfiguration?: string;
    status?: SessionStatusEnum;
}

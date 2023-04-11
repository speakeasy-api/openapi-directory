import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { ProviderTypeEnum } from "./providertypeenum";
/**
 * Provides summary information about an App Runner connection resource.
 */
export declare class ConnectionSummary extends SpeakeasyBase {
    connectionArn?: string;
    connectionName?: string;
    createdAt?: Date;
    providerType?: ProviderTypeEnum;
    status?: ConnectionStatusEnum;
}

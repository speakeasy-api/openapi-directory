import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
import { ProviderTypeEnum } from "./providertypeenum";
/**
 * Describes an App Runner connection resource.
 */
export declare class Connection extends SpeakeasyBase {
    connectionArn?: string;
    connectionName?: string;
    createdAt?: Date;
    providerType?: ProviderTypeEnum;
    status?: ConnectionStatusEnum;
}

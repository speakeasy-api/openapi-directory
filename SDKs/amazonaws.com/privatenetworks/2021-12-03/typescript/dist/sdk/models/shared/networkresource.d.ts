import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
import { NameValuePair } from "./namevaluepair";
import { NetworkResourceStatusEnum } from "./networkresourcestatusenum";
import { NetworkResourceTypeEnum } from "./networkresourcetypeenum";
import { Position } from "./position";
import { ReturnInformation } from "./returninformation";
/**
 * Information about a network resource.
 */
export declare class NetworkResource extends SpeakeasyBase {
    attributes?: NameValuePair[];
    createdAt?: Date;
    description?: string;
    health?: HealthStatusEnum;
    model?: string;
    networkArn?: string;
    networkResourceArn?: string;
    networkSiteArn?: string;
    orderArn?: string;
    position?: Position;
    returnInformation?: ReturnInformation;
    serialNumber?: string;
    status?: NetworkResourceStatusEnum;
    statusReason?: string;
    type?: NetworkResourceTypeEnum;
    vendor?: string;
}

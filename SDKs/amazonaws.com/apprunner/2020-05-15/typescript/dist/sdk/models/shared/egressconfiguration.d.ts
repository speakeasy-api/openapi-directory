import { SpeakeasyBase } from "../../../internal/utils";
import { EgressTypeEnum } from "./egresstypeenum";
/**
 * Describes configuration settings related to outbound network traffic of an App Runner service.
 */
export declare class EgressConfiguration extends SpeakeasyBase {
    egressType?: EgressTypeEnum;
    vpcConnectorArn?: string;
}

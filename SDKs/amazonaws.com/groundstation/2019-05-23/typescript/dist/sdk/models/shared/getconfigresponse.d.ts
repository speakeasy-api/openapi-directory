import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
import { ConfigTypeData } from "./configtypedata";
/**
 * <p/>
 */
export declare class GetConfigResponse extends SpeakeasyBase {
    configArn: string;
    configData: ConfigTypeData;
    configId: string;
    configType?: ConfigCapabilityTypeEnum;
    name: string;
    tags?: Record<string, string>;
}

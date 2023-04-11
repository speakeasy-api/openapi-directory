import { SpeakeasyBase } from "../../../internal/utils";
import { RouterType } from "./routertype";
/**
 * Success
 */
export declare class DescribeRouterConfigurationResponse extends SpeakeasyBase {
    customerRouterConfig?: string;
    router?: RouterType;
    virtualInterfaceId?: string;
    virtualInterfaceName?: string;
}

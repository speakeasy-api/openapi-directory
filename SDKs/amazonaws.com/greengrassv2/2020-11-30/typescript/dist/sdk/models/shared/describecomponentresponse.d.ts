import { SpeakeasyBase } from "../../../internal/utils";
import { CloudComponentStatus } from "./cloudcomponentstatus";
import { ComponentPlatform } from "./componentplatform";
/**
 * Success
 */
export declare class DescribeComponentResponse extends SpeakeasyBase {
    arn?: string;
    componentName?: string;
    componentVersion?: string;
    creationTimestamp?: Date;
    description?: string;
    platforms?: ComponentPlatform[];
    publisher?: string;
    status?: CloudComponentStatus;
    tags?: Record<string, string>;
}

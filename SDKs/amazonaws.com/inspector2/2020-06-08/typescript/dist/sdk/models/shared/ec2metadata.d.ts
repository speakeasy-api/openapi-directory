import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2PlatformEnum } from "./ec2platformenum";
/**
 * Meta data details of an Amazon EC2 instance.
 */
export declare class Ec2Metadata extends SpeakeasyBase {
    amiId?: string;
    platform?: Ec2PlatformEnum;
    tags?: Record<string, string>;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of <code>autoEnableIO</code> attribute.
**/
export declare class DescribeVolumeAttributeResultAutoEnableIo extends SpeakeasyBase {
    value?: Record<string, any>;
}
export declare class DescribeVolumeAttributeResult extends SpeakeasyBase {
    autoEnableIO?: DescribeVolumeAttributeResultAutoEnableIo;
    productCodes?: Record<string, any>;
    volumeId?: Record<string, any>;
}

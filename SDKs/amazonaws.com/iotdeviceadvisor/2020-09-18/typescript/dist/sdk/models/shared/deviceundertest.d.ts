import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information of a test device. A thing ARN or a certificate ARN is required.
 */
export declare class DeviceUnderTest extends SpeakeasyBase {
    certificateArn?: string;
    thingArn?: string;
}

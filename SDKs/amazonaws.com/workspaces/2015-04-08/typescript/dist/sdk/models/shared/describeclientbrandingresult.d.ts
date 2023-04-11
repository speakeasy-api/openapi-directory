import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultClientBrandingAttributes } from "./defaultclientbrandingattributes";
import { IosClientBrandingAttributes } from "./iosclientbrandingattributes";
/**
 * Success
 */
export declare class DescribeClientBrandingResult extends SpeakeasyBase {
    deviceTypeAndroid?: DefaultClientBrandingAttributes;
    deviceTypeIos?: IosClientBrandingAttributes;
    deviceTypeLinux?: DefaultClientBrandingAttributes;
    deviceTypeOsx?: DefaultClientBrandingAttributes;
    deviceTypeWeb?: DefaultClientBrandingAttributes;
    deviceTypeWindows?: DefaultClientBrandingAttributes;
}

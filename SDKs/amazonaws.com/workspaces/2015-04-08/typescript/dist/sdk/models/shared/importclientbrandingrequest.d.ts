import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultImportClientBrandingAttributes } from "./defaultimportclientbrandingattributes";
import { IosImportClientBrandingAttributes } from "./iosimportclientbrandingattributes";
export declare class ImportClientBrandingRequest extends SpeakeasyBase {
    deviceTypeAndroid?: DefaultImportClientBrandingAttributes;
    deviceTypeIos?: IosImportClientBrandingAttributes;
    deviceTypeLinux?: DefaultImportClientBrandingAttributes;
    deviceTypeOsx?: DefaultImportClientBrandingAttributes;
    deviceTypeWeb?: DefaultImportClientBrandingAttributes;
    deviceTypeWindows?: DefaultImportClientBrandingAttributes;
    resourceId: string;
}

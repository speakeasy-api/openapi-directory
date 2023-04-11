import { SpeakeasyBase } from "../../../internal/utils";
import { ImagePackage } from "./imagepackage";
/**
 * Success
 */
export declare class ListImagePackagesResponse extends SpeakeasyBase {
    imagePackageList?: ImagePackage[];
    nextToken?: string;
    requestId?: string;
}

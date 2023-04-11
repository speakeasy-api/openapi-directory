import { SpeakeasyBase } from "../../../internal/utils";
import { InstalledComponent } from "./installedcomponent";
/**
 * Success
 */
export declare class ListInstalledComponentsResponse extends SpeakeasyBase {
    installedComponents?: InstalledComponent[];
    nextToken?: string;
}

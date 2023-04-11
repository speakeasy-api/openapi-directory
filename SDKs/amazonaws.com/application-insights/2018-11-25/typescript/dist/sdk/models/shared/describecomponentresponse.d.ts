import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationComponent } from "./applicationcomponent";
/**
 * Success
 */
export declare class DescribeComponentResponse extends SpeakeasyBase {
    /**
     * Describes a standalone resource or similarly grouped resources that the application is made up of.
     */
    applicationComponent?: ApplicationComponent;
    resourceList?: string[];
}

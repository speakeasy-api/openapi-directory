import { SpeakeasyBase } from "../../../internal/utils";
import { PhysicalResource } from "./physicalresource";
/**
 * Success
 */
export declare class DescribeAppVersionResourceResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    physicalResource?: PhysicalResource;
}

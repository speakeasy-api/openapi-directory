import { SpeakeasyBase } from "../../../internal/utils";
import { DriveGroup } from "./drivegroup";
/**
 * DriveGroups
 */
export declare class GetDriveGroupResponse extends SpeakeasyBase {
    data: DriveGroup;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}

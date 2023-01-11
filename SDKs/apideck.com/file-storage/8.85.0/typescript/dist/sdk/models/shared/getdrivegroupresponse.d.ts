import { SpeakeasyBase } from "../../../internal/utils";
import { DriveGroup } from "./drivegroup";
export declare class GetDriveGroupResponse extends SpeakeasyBase {
    data: DriveGroup;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

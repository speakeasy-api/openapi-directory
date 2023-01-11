import { SpeakeasyBase } from "../../../internal/utils";
import { DriveGroup } from "./drivegroup";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetDriveGroupsResponse extends SpeakeasyBase {
    data: DriveGroup[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}

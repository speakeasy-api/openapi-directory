import { SpeakeasyBase } from "../../../internal/utils";
import { SpaceSettings } from "./spacesettings";
import { SpaceStatusEnum } from "./spacestatusenum";
/**
 * Success
 */
export declare class DescribeSpaceResponse extends SpeakeasyBase {
    creationTime?: Date;
    domainId?: string;
    failureReason?: string;
    homeEfsFileSystemUid?: string;
    lastModifiedTime?: Date;
    spaceArn?: string;
    spaceName?: string;
    spaceSettings?: SpaceSettings;
    status?: SpaceStatusEnum;
}
